import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridModel, GridComponent, rowDataBound, IEditCell, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { API_BILLING } from 'src/app/api/BILLING';
import { ResepDokterIrnaService } from 'src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service';
import { AdmisiPasienRawatInapService } from 'src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { TransaksiObatIrnaService } from '../../../services/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.service';
import * as LookupGridRuangan from './json/LookupGridRuangan.json'
import * as GridConfig from './json/gridPasien.config.json'
import * as GridConfigResep from './json/gridResep.config.json'
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-transaksi-obat-formularium-irna',
  templateUrl: './transaksi-obat-formularium-irna.component.html',
  styleUrls: ['./transaksi-obat-formularium-irna.component.css']
})
export class TransaksiObatFormulariumIrnaComponent implements OnInit {

  urlRuangan = API_BILLING.SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;
  LookupGridRuangan = LookupGridRuangan;
  GridConfig = GridConfig;
  GridConfigResep = GridConfigResep; 
  @ViewChild('LookupKodeRuangan') LookupKodeRuangan: OrgInputLookUpKodeComponent;
  DataSourcePasien:any = [];
  DataSourceResep:any = [];
  DataSourceDetailResep:any = [];
  DataSourceDetailResepRacikan:any = [];
  formInput: FormGroup;
  inputFieldState = 'detail';
  childGrid: GridModel;
  @ViewChild('GridDetailResep') GridDetailResep: GridComponent;
  handleClickResep:boolean = false;
  currentResepId = null;
  currentRegisterId = 1;
  @ViewChild('GridPasien') GridPasien:MolGridComponent
  
  GridDataEditSettings: EditSettingsModel = { allowEditing: true };


  public keterangan = (field: string, data1: object) => {
    return  data1['nama_obat'] +', '+
            data1['ket_label'] +', '+
            data1['ket_aturan'];
  }

  public quantity = (field: string, data1: object) => {
      return  data1['qty_resep'] + ' ' +data1['nama_satuan'] 
  }

  public totalharga = (field: string, data1: object) => {
      return (data1['is_racikan'])? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'] 
  }

  dataSourceChild:any = [];
  dataSource:any = [];
  dataHeader:any = [];

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
  public reloadGrid = new BehaviorSubject(0);
  GridDataToolbar: any[];
  public currentIndex = null;

  constructor(
    private formBuilder: FormBuilder,
    private resepDokterIrnaService: ResepDokterIrnaService,
    public transaksiObatIrnaService: TransaksiObatIrnaService,
    public admisiPasienRawatInapService: AdmisiPasienRawatInapService
    // public setupPoliService: SetupPoliService
  ) { }

  ngOnInit(): void {

    this.GridDataToolbar = [
      { text: 'remove', tooltipText: 'remove', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'remove' },
    ];
    
    this.formInput = this.formBuilder.group({
      nama_pasien: ['', []],
      umur: ['', []],
      poli: ['',[]],
      bed : ['', []],
      dokter : ['', []],
      nomor_rm : ['', []],
      nomor_registrasi : ['', []],
      total_bayar_resep: [0,[]]
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
    }


    this.set(1);
    this.reloadGrid.subscribe((res)=>{
      this.hitungTotal();
    })
  }
  
  heandleSelectedRuangan(args: any): void {
    console.log(args);
    this.admisiPasienRawatInapService.onGetPasienByPoli(args.id_poli).subscribe((result)=>{
      this.DataSourcePasien = result.data
      this.GridPasien.Grid.refresh()
    })
    this.handleClickResep = false;
  }

  set(id_register){
    this.resepDokterIrnaService.onGetByIdRegisterToTrans(id_register).subscribe((result)=>{
      this.transaksiObatIrnaService.setResep(result.data)
      console.log(result.data);
    })
  }

  handleSelectedRow(args:any): void{
    console.log(args)
    this.currentRegisterId = args.data.id_register;

    this.formInput.setValue({
      nama_pasien       : args.data.nama_pasien,
      umur              : args.data.usia,
      poli              : args.data.nama_poli,
      bed               : args.data.bed_no+' - '+args.data.bed_no,
      dokter            : args.data.nama_dokter,
      nomor_rm          : args.data.no_rekam_medis,
      nomor_registrasi  : args.data.no_register,
      total_bayar_resep : 0,
    });

    this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
      this.transaksiObatIrnaService.setResep(result.data)
    })
  }

  handleSelectedRowResep(args:any):void{
    this.handleClickResep = true;
    this.onLoadDetailData(args.data.resep_id);  
    this.currentResepId = args.data.resep_id;
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
    this.GridDetailResep.detailRowModule.expandAll();
  }

  onLoadDetailData(id) {
    this.resepDokterIrnaService.onGetById(id).subscribe((result)=>{
      this.dataSource = result.data.details;
      this.GridDetailResep.refresh();
      this.mapingRacikan(result.data.details);
      let tot =0
      this.DataSourceDetailResep.map((item)=>{
        let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
        tot +=  har;
        this.total_bayar_resep.setValue(tot);
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
    let reloadGrid = this.reloadGrid

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
            { field: "qty_racikan", headerText: "Qty" ,allowEditing:true,width:50},
            { field: "harga_jual_apotek", headerText: "Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70},
            { field: "total_harga", headerText: "Total Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70}
        ],
        rowSelected(args){
            console.log(args.data.id_formularium);
            id_formularium = args.data.id_formularium;
            currentRacikan = args.data
        },
        actionComplete(args) {
            reloadGrid.next(1);
            console.log(args);
            
            if (args.requestType == 'save') {
                if (args.action == 'add') {
                    
                }
                if (args.action == 'edit') {
                    console.log('id_item_racikan = ',id_item_racikan);
                    args.data.id_item = id_item_racikan
                    args.data.nama_item = nama_item_racikan
                    args.data.total_harga = args.data.qty_racikan * args.data.harga_jual_apotek
                    let index = dataSourceChild.map((item) => { return item.resep_detail_racikan_id }).indexOf(args.data.resep_detail_racikan_id);
                    dataSourceChild[index] = args.data;
                }
            }
        }
    }
  }

  handleToolbarClick(args: any): void {
    const item = args.item.id;
    console.log(item);
    switch (item) {
      case 'remove':
        this.dataSource.splice(this.currentIndex, 1);
        this.GridDetailResep.refresh();
        console.log('remove');
        break;
      default:
        break;
    }
  }

  setFormGrif(selected,qty) {
    (<HTMLInputElement>document.getElementsByName("harga_jual_apotek")[0]).value = selected.harga_jual_apotek.toString();
    (<HTMLInputElement>document.getElementsByName("total_harga")[0]).value = (selected.harga_jual_apotek*qty).toString();

    let qty_racikan = (<HTMLInputElement>document.getElementsByName("qty_racikan")[0])
    if (qty_racikan) {
      qty_racikan.addEventListener('click', (event) => {
        qty_racikan.select();
      });
      qty_racikan.addEventListener('keyup', (event) => {
          let qty_racikan = parseInt((<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value);
          let total_harga = qty_racikan * selected.harga_jual_apotek;
          (<HTMLInputElement>document.getElementsByName("total_harga")[0]).value = total_harga.toString();
      });
      this.setInputFilter(qty_racikan, function (value) {
          return /^\d*$/.test(value);
      });
    }
  }

  setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                this.value = this.oldValue;
                if (this.oldSelectionStart !== null &&
                    this.oldSelectionEnd !== null) {
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            } else {
                this.value = "";
            }
        });
    });
  }


  handleSelected(args){
    console.log(args);
    this.currentIndex = args.rowIndex
    this.id_formularium = (args.data.id_formularium)?args.data.id_formularium:0;
    this.currentResep = args.data
    console.log('data source',this.dataSource);
    console.log('data source grid',this.dataSourceChild);
    this.hitungTotal();
  }

  hitungTotal(){
    let tot =0
    this.dataSource.map((item)=>{
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
  }

  hanldeActionComplated(args){
    if(args.requestType == 'save' && args.action=='edit'){
        console.log(args);
        this.dataSource[args.rowIndex].id_item           = this.id_item
        this.dataSource[args.rowIndex].nama_item         = this.nama_item
        this.dataSource[args.rowIndex].qty_resep         = args.data.qty_resep
        this.dataSource[args.rowIndex].harga_jual_apotek = args.data.harga_jual_apotek
        this.dataSource[args.rowIndex].total_harga       = args.data.qty_resep * args.data.harga_jual_apotek
        this.GridDetailResep.refresh();
    }
  }

  handelClickLihatresep(){
    this.handleClickResep = false;
  }

  handleClickSimpan(){
    let Data = {
      resep_id  : this.currentResepId,
      details   : this.dataSource
    }
    
    Data.details.map((e)=>{
      e.racikans = this.dataSourceChild.filter(o => o.resep_detail_id == e.resep_detail_id)
      return e;
    });

    this.transaksiObatIrnaService.InsertFormularium(Data).subscribe((result)=>{
      this.handleClickResep = false;
      this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
        this.transaksiObatIrnaService.setResep(result.data)
      })
    })
  }

  get total_bayar_resep (){return this.formInput.get('total_bayar_resep')}

}
