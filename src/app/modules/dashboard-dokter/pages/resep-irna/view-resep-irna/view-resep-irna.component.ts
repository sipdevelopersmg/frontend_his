import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { IEditCell, EditSettingsModel, GridModel, GridComponent, AddEventArgs } from '@syncfusion/ej2-angular-grids';

import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { ResepDokterIrnaService } from '../../../services/resep-dokter-irna/resep-dokter-irna.service';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ActivatedRoute } from '@angular/router';
import * as GridConfig from './json/grid.config.json'
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';


@Component({
  selector: 'app-view-resep-irna',
  templateUrl: './view-resep-irna.component.html',
  styleUrls: ['./view-resep-irna.component.css'],
  providers: [BsModalService]

})

export class ViewResepIrnaComponent implements OnInit {
    
  ButtonNav: ButtonNavModel[] = [
    { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
    { Id: 'lanjutkan', Captions: 'Lanjutkan Resep', Icons1: 'fa-forward fa-sm' },
    { Id: 'ubah', Captions: 'Ubah Resep', Icons1: 'fa-edit fa-sm' },
    { Id: 'stop', Captions: 'Hentikan Resep', Icons1: 'fa-stop-circle fa-sm' },
  ];

  @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;

    GridConfig = GridConfig;
    inputFieldState = 'detail';
    childGrid: GridModel;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;
    @ViewChild('modalTambahanHariResep') modalTambahanHariResep: TemplateRef<any>;

    modalRef: BsModalRef;

    public keterangan = (field: string, data1: object) => {
        return  data1['nama_obat'] +' '+
                data1['rute_pemberian_obat'] + ', sehari ' + 
                data1['qty_harian'] +' '+ data1['nama_satuan']+', '+ data1['jumlah_satuan_aturan_pakai']+' '+ data1['nama_satuan']+
                ' tiap '+data1['jumlah_interval_aturan_pakai'] +' '+ data1['interval_aturan_pakai']+' sekali, '+
                data1['ket_aturan'];
    }

    public quantity = (field: string, data1: object) => {
        return  data1['qty_harian'] +' '+
                data1['nama_satuan']+'/Hari, untuk '+data1['jumlah_hari']+' Hari';
    }

    dataSourceChild:any = [];
    dataSource:any = [];
    dataHeader:any = [];
    formInput: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public resepDokterIrnaService: ResepDokterIrnaService,
        private router:Router,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private utilityService:UtilityService,
        private modalService: BsModalService,
        private utilityHelperService:UtilityHelperService
    ) { }

    ngOnInit(): void {
        
        this.formInput = this.formBuilder.group({
            pasien: ['', []],
            bed: ['', []],
            dokter : ['', []],
            umur : ['', []],
        });

        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        }
    }

    ngAfterViewInit(): void {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }

    onLoadDetailData(id) {
       this.resepDokterIrnaService.onGetById(id).subscribe((result)=>{
           this.dataHeader = result.data;
           this.dataSource = result.data.details;
           this.GridResepRacikan.refresh();
           this.mapingRacikan(result.data.details);
           let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
           this.formInput.setValue({
                // bed:result.data.nama_poli,
                pasien:result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                umur: umur.years+' tahun, '+umur.months+' Bulan, '+umur.days+' Hari'
           })
       })
    }

    mapingRacikan(details){
        this.dataSourceChild = [];
        details.map((item) => {
            this.dataSourceChild.push(...item.racikans);
        });
        
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        }
    }

    rowDataBound(args: any) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        } else {
            // args.row.classList.add('is-racikan');
        }
    }
  
  
    onDataBound(){
        this.GridResepRacikan.detailRowModule.expandAll();
    }

    handleClickLanjutkanResepDokter(args){
        let Body:any
        Body = this.GridResepRacikan.getSelectedRecords()
        Body.map((e,i)=>{
            e.jumlah_hari = args;
            return e;
        });
        // console.log(Body);
        this.resepDokterIrnaService.lanjutakanResepRawatInap(Body).subscribe((result)=>{
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di lanjutkan', result.message)
                .then(() => {
                    this.modalRef.hide();
                    this.onLoadDetailData(this.dataHeader.resep_id);
                });
        })
    }
   
    onClickButtonNav(args: any): void {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('Dokter/resep-irna/daftar-resep-irna');
                break;
            case "lanjutkan":
                this.modalRef = this.modalService.show(
                    this.modalTambahanHariResep,
                    Object.assign({}, { class: 'modal-md' })
                );
                break;
            case "ubah":
                const id = this.encryptionService.encrypt(this.dataHeader.resep_id+',ubah');
                this.router.navigate(['Dokter/resep-irna/ubah-resep-irna', id, "GRAHCIS"]);
                break;
            case "pulang":
                const id_resep = this.encryptionService.encrypt(this.dataHeader.resep_id+',pulang');
                this.router.navigate(['Dokter/resep-irna/ubah-resep-irna', id_resep, "GRAHCIS"]);
                break;
            case "stop":
                this.resepDokterIrnaService.stopResepRawatInap(this.dataHeader.resep_id).subscribe((result)=>{
                    this.utilityService.onShowingCustomAlert('success', 'Resep Ini Berhasil Di Stop', result.message)
                    .then(() => {
                        this.router.navigateByUrl('Dokter/resep-irna/daftar-resep-irna');
                    });
                });
                break;
            default:
                break;
        }
    }

}
