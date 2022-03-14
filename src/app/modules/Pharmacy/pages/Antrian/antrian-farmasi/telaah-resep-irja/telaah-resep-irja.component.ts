import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { GridModel, GridComponent, EditSettingsModel, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ResepDokterService } from 'src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service';
import { TransaksiObatIrjaService } from 'src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-telaah-resep-irja',
  templateUrl: './telaah-resep-irja.component.html',
  styleUrls: ['./telaah-resep-irja.component.css']
})
export class TelaahResepIrjaComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
    { Id: 'simpan', Captions: 'Simpan Telaah Resep', Icons1: 'fa-save fa-sm' },
  ];

  @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;

    GridConfig = GridConfig;
    inputFieldState = 'detail';
    childGrid: GridModel;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;
    @ViewChild('modalTambahanHariResep') modalTambahanHariResep: TemplateRef<any>;

    modalRef: BsModalRef;
    GridDataEditSettings: EditSettingsModel = { allowEditing: true };

    public keterangan = (field: string, data1: object) => {
        return  data1['ket_label'] +', '+
                data1['ket_aturan'];
    }

    public quantity = (field: string, data1: object) => {
        return  data1['qty_resep'] 
    }

    public totalharga = (field: string, data1: object) => {
        return (data1['is_racikan'])? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'] 
    }

    dataSourceChild:any = [];
    dataSource:any = [];
    dataHeader:any = [];
    formInput: FormGroup;
    imageSrc: string;
    whereField = "msi.nama_item";
    select = "'nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'";

    public id_formularium = 0;

    public itemsParams: IEditCell;
    public itemsElem: HTMLElement;
    public itemsObj: DropDownList;

    public itemsRacikanParams: IEditCell;
    public itemsRacikanElem: HTMLElement;
    public itemsRacikanObj: DropDownList;

    public fields: Object = { text: 'nama_obat', value: 'id_item' };
    public IsUserLogin: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));
    public dataChild: DataManager = new DataManager({
        headers: [
            {
                Authorization: "Bearer " + this.IsUserLogin.token
            }
        ],
        url: PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRJA.GET_OBAT_FORMULARIUM,
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    public queryChild: Query = new Query().from('Obat/'+this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);

    public id_item_racikan = null;
    public nama_item_racikan = null;
    public id_item = null;
    public nama_item = null;
    public currentResep = null;
    public currentRacikan = null;
    constructor(
        public resepDokterService: ResepDokterService,
        public transaksiObatIrjaService:TransaksiObatIrjaService,
        private router:Router,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private utilityService:UtilityService,
        private utilityHelperService:UtilityHelperService,
        private pendaftaranPasienBaruService:PendaftaranPasienBaruService,
        private formBuilder: FormBuilder,

    ) { }

    ngOnInit(): void {

        this.formInput = this.formBuilder.group({
            resep_id:[0,[]],
            outlet: ['',[]],
            pasien: ['', []],
            poli: ['', []],
            dokter : ['', []],
            umur : ['', []],
            total_bayar_resep:[0,[]],
            telaah_nama_obat : [true, []],
            telaah_duplikasi_pengobatan : [true, []],
            telaah_interaksi_obat : [true, []],
            telaah_tepat_indikasi : [true, []],
            telaah_stabilitas : [true, []],
            keterangan_telaah_resep : ['', []]
        });

        this.itemsParams = {
            create : () => {

                this.queryChild = new Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true)

                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                
                this.itemsObj = new DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        } else {
                            let query: Query = new Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        this.id_item = args.itemData.id_item
                        this.nama_item = args.itemData.nama_obat
                        this.setFormGrif(args.itemData,this.currentResep.qty_resep);
                    }.bind(this)
                });

                this.itemsObj.appendTo(this.itemsElem);

                if(this.currentResep.id_item){
                    setTimeout(() => {
                        console.log('set combobax',this.currentResep);
                        this.itemsObj.value = this.currentResep.id_item;
                    }, 10)
                }
            }
        }

      this.childGrid = {
        dataSource: this.dataSourceChild,
        // queryString: "resep_detail_id",
        // rowHeight: 30,
        // allowResizing: true,
        // allowTextWrap: true,
        // editSettings: { allowEditing: true},
        // textWrapSettings: { wrapMode: 'Both' },
        // columns: [
        //   { field: "nama_obat", headerText: "Nama Generik",allowEditing:false},
        //   { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams},
        //   { field: "qty_racikan", headerText: "Qty" ,allowEditing:false,width:50},
        //   { field: "harga_jual_apotek", headerText: "Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70},
        //   { field: "total_harga", headerText: "Total Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70}
        // ],
        // rowSelected(args){
        //     console.log(args);
        // }
      }

    }

    ngAfterViewInit(): void {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }

    onLoadDetailData(id) {
        this.resepDokterService.onGetById(id).subscribe((result)=>{
            this.dataHeader = result.data;
            console.log('header',this.dataHeader);
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            this.formInput.setValue({
                resep_id                :id,
                outlet                  :result.data.nama_outlet,
                poli                    :result.data.nama_poli,
                pasien                  :result.data.nama_pasien,
                dokter                  :result.data.nama_dokter,
                umur                    :result.data.tgl_lahir,
                total_bayar_resep       :0,
                telaah_nama_obat        :true,
                telaah_duplikasi_pengobatan:true,
                telaah_interaksi_obat   :true,
                telaah_tepat_indikasi   :true,
                telaah_stabilitas       :true,
                keterangan_telaah_resep :''
            })

            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(this.dataHeader.id_person, false)
                .subscribe((result) => {
                    this.imageSrc = result.data;
            });           
        })
    }

    mapingRacikan(details){
        this.dataSourceChild = [];
        
        details.map((item) => {
            item.racikans.map((e)=>{
                e.total_harga = e.qty_racikan * e.harga_jual_apotek;
                return e
            })
            this.dataSourceChild.push(...item.racikans);
            item.total_harga = 0
            return item;
        });

        let id_formularium = this.id_formularium;
        let id_item_racikan = this.id_item_racikan;
        let nama_item_racikan = this.nama_item_racikan
        let currentRacikan = this.currentRacikan;
        this.itemsRacikanParams = {
            create : () => {
                this.queryChild = new Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true)
                console.log('formularium', id_formularium);
                this.itemsRacikanElem = document.createElement('input');
                return this.itemsRacikanElem;
            },
            read: () => {
                return this.itemsRacikanObj.text;
            },
            destroy: () => {
                this.itemsRacikanObj.destroy();
            },
            write: () => {
                this.itemsRacikanObj = new DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        } else {
                            let query: Query = new Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        id_item_racikan = args.itemData.id_item
                        nama_item_racikan = args.itemData.nama_obat
                        this.setFormGrif(args.itemData,currentRacikan.qty_racikan);
                    }.bind(this)
                });
                this.itemsRacikanObj.appendTo(this.itemsRacikanElem);
                if(currentRacikan.id_item){
                    setTimeout(() => {
                        console.log('set combobax',currentRacikan);
                        this.itemsRacikanObj.value = currentRacikan.id_item;
                    }, 10)
                }
            }
        }

        let dataSourceChild = this.dataSourceChild

        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            editSettings: { allowEditing: true},
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { field: "resep_detail_racikan_id",visible:false, headerText: "Racikan Id",allowEditing:false},
                { field: "nama_obat", headerText: "Nama Generik",allowEditing:false},
                { field: "id_item",visible:false, headerText: "Id Item",allowEditing:false},
                { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsRacikanParams},
                { field: "qty_racikan", headerText: "Qty" ,allowEditing:false,width:50},
                { field: "harga_jual_apotek", headerText: "Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70},
                { field: "total_harga", headerText: "Total Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70}
            ],
            rowSelected(args){
                console.log(args.data.id_formularium);
                id_formularium = args.data.id_formularium;
                currentRacikan = args.data
            },
            actionComplete(args) {
                console.log(args);
                
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        
                    }
                    if (args.action == 'edit') {
                        console.log('id_item_racikan = ',id_item_racikan);
                        args.data.id_item = id_item_racikan
                        args.data.nama_item = nama_item_racikan
                        let index = dataSourceChild.map((item) => { return item.resep_detail_racikan_id }).indexOf(args.data.resep_detail_racikan_id);
                        dataSourceChild[index] = args.data;
                    }
                }
            }
        }
    }

    setFormGrif(selected,qty) {
        (<HTMLInputElement>document.getElementsByName("harga_jual_apotek")[0]).value = selected.harga_jual_apotek.toString();
        (<HTMLInputElement>document.getElementsByName("total_harga")[0]).value = (selected.harga_jual_apotek*qty).toString();
    }


    hanldeActionComplated(args){
        if(args.requestType == 'save' && args.action=='edit'){
            console.log(args);
            this.dataSource[args.rowIndex].id_item           = this.id_item
            this.dataSource[args.rowIndex].nama_item         = this.nama_item
            this.dataSource[args.rowIndex].harga_jual_apotek = args.data.harga_jual_apotek
            this.dataSource[args.rowIndex].total_harga       = args.data.total_harga
            this.GridResepRacikan.refresh();
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

    handleSelected(args){
        console.log(args);
        let tot =0
        this.GridResepRacikan.getSelectedRecords().map((item)=>{
            let har = 0;
            if(item['is_racikan']){
                item['racikans'].map((racikan)=>{
                    har += this.dataSourceChild.find(o => o.resep_detail_racikan_id === racikan.resep_detail_racikan_id).total_harga;
                })
            }else{
                har = item['total_harga']
            }
            tot +=  har;
            
        });
        this.total_bayar_resep.setValue(tot);
        this.id_formularium = (args.data.id_formularium)?args.data.id_formularium:0;
        this.currentResep = args.data
        console.log('selected',this.GridResepRacikan.getSelectedRecords());
        console.log('data source',this.dataSource);
        console.log('data source grid',this.dataSourceChild);
    }
   
    onClickButtonNav(args: any): void {
      switch (args) {
        case "kembali":
          this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
          break;
        case "simpan":
            let data = this.formInput.value
            this.resepDokterService.insertTelaah(data).subscribe((result)=>{
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                });
            })
          break;
        default:
          break;
      }
    }

    get total_bayar_resep (){return this.formInput.get('total_bayar_resep')}

}
