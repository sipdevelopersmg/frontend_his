import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
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

    ShowTitle: boolean = true;

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
    @ViewChild('modalStopResep') modalStopResep: TemplateRef<any>;

    modalRef: BsModalRef;

    public keterangan = (field: string, data1: object) => {
        return data1['nama_rute_pemberian_obat'] +
            ', sehari ' + data1['qty_harian'] + ' ' +
            data1['nama_satuan'] + ' ' + data1['ket_label'] + ' '
            + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];;
    }

    public quantity = (field: string, data1: object) => {
        return data1['qty_harian'] + ' ' +
            data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
    }

    dataSourceChild: any = [];
    dataSource: any = [];
    dataHeader: any = [];
    formInput: FormGroup;
    htmlSelection: string = '';

    @Input('QueryParams') QueryParams: any;

    @Output('handleClickButtonNav') handleClickButtonNav = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        public resepDokterIrnaService: ResepDokterIrnaService,
        private router: Router,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private modalService: BsModalService,
        private utilityHelperService: UtilityHelperService
    ) { }

    ngOnInit(): void {

        this.formInput = this.formBuilder.group({
            no_register: ['', []],
            no_rekam_medis: ['', []],
            poli: ['', []],
            pasien: ['', []],
            bed: ['', []],
            dokter: ['', []],
            umur: ['', []],
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

        if ((this.router.url).includes('Dokter')) {
            this.ShowTitle = false;
        }
    }

    ngAfterViewInit(): void {
        if (this.ShowTitle) {
            let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
            this.onLoadDetailData(id);
        } else {
            this.checkQueryParams();
        }
    }

    checkQueryParams(): void {
        if (typeof this.QueryParams !== 'undefined') {
            let id = this.encryptionService.decrypt(this.QueryParams);
            this.onLoadDetailData(id);
        }
    }

    onLoadDetailData(id: any) {
        this.resepDokterIrnaService.onGetById(id)
            .subscribe((result) => {
                this.formInput.setValue({
                    bed: result.data.bed_no + ' - ' + result.data.bed_no,
                    pasien: result.data.nama_pasien,
                    dokter: result.data.nama_dokter,
                    no_register: result.data.no_register,
                    no_rekam_medis: result.data.no_rekam_medis,
                    poli: result.data.nama_poli,
                    umur: result.data.usia
                })
                this.dataHeader = result.data;
                this.dataSource = result.data.details;
                this.GridResepRacikan.refresh();
                this.mapingRacikan(result.data.details);
                // let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            });
    }

    mapingRacikan(details: any) {
        this.dataSourceChild = [];
        details.map((item: any) => {
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

    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }

    handleClickLanjutkanResepDokter(args: any) {
        let Body: any
        Body = this.GridResepRacikan.getSelectedRecords()
        Body.map((e, i) => {
            e.jumlah_hari = args;
            return e;
        });
        // console.log(Body);
        this.resepDokterIrnaService.lanjutakanResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di lanjutkan', result.message)
                .then(() => {
                    this.modalRef.hide();
                    this.onLoadDetailData(this.dataHeader.resep_id);
                });
        })
    }

    handleClickStopResepDokter(args: any) {
        let Body: any
        Body = this.GridResepRacikan.getSelectedRecords()
        this.resepDokterIrnaService.stopResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di hentikan/Stop', result.message)
                .then(() => {
                    this.modalRef.hide();
                    this.onLoadDetailData(this.dataHeader.resep_id);
                });
        })
    }

    onClickButtonNav(args: any): void {
        let data = this.GridResepRacikan.getSelectedRecords();
        switch (args) {
            case "kembali":
                if (this.ShowTitle) {
                    this.router.navigateByUrl('Dokter/resep-irna/daftar-resep-irna');
                } else {
                    this.handleClickButtonNav.emit({ id: 'kembali', data: null });
                }
                break;
            case "lanjutkan":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '')
                } else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(
                        this.modalTambahanHariResep,
                        Object.assign({}, { class: 'modal-md' })
                    );
                }
                break;
            case "ubah":
                const id = this.encryptionService.encrypt(this.dataHeader.resep_id + ',ubah');

                if (this.ShowTitle) {
                    this.router.navigate(['Dokter/resep-irna/ubah-resep-irna', id, "GRAHCIS"]);
                } else {
                    this.handleClickButtonNav.emit({ id: 'ubah', data: id });
                }
                break;
            case "pulang":
                const id_resep = this.encryptionService.encrypt(this.dataHeader.resep_id + ',pulang');
                if (this.ShowTitle) {
                    this.router.navigate(['Dokter/resep-irna/ubah-resep-irna', id_resep, "GRAHCIS"]);
                } else {
                    this.handleClickButtonNav.emit({ id: 'pulang', data: id });
                }
                break;
            case "stop":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '')
                } else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(
                        this.modalStopResep,
                        Object.assign({}, { class: 'modal-md' })
                    );
                }
                break;
            default:
                break;
        }
    }

    templateSelection() {
        let data = this.GridResepRacikan.getSelectedRecords();
        this.htmlSelection = '<ul>';
        data.forEach((value: any, index) => {
            this.htmlSelection += `<li>${value.nama_obat}</li>`;
        })
        this.htmlSelection += '</ul>';
        console.log(this.htmlSelection);
    }

}
