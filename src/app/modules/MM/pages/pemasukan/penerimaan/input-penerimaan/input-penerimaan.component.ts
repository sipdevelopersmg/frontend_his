import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import * as GridConfig from './json/grid.config.json';
@Component({
  selector: 'app-input-penerimaan',
  templateUrl: './input-penerimaan.component.html',
  styleUrls: ['./input-penerimaan.component.css']
})
export class InputPenerimaanComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
  ];

  public GridConfig = GridConfig;

  GridDetailToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
  ];

  modalRef: BsModalRef;

  url = '';
  formPemasukan :FormGroup ;
  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formPemasukan = this.formBuilder.group({
      tanggal_penerimaan    : [null, Validators.required],
      kode_jenis_penerimaan : ["", Validators.required],
      id_stockroom          : ["", Validators.required],
      id_supplier           : ["", Validators.required],
      nomor_surat_jalan_supplier: ["", Validators.required],
      tanggal_surat_jalan_pasien: [null, Validators.required],
      sppb                : ["", Validators.required],
      id_shipping_method  : ["", Validators.required],
      id_payment_term     : ["", Validators.required],
      tanggal_jatuh_tempo : [null, Validators.required],
      jumlah_item         : ["", Validators.required],
      sub_total_1         : ["", Validators.required],
      total_disc          : ["", Validators.required],
      sub_total_2         : ["", Validators.required],
      total_tax           : ["", Validators.required],
      total_transaksi     : ["", Validators.required],
      keterangan          : ["", Validators.required],
    });
  }

      onClickButtonNav(ButtonId: string): void {
          switch (ButtonId) {
              case 'add':
                  break;
              case 'edit':
                  break;
              case 'delete':
                  break;
              default:
                  break;
          }
      }       
  
      onToolbarClick(args: any): void {
          const item = args.item.id;
          switch (item) {
              case 'add':
                 
                  break;
              case 'edit':
                 
                  break;
              case 'detail':
           
                  break;
              default:
                  break;
          }
      }
      
      heandleSelectedJenisPemerimaan($event){

      }
  
      heandleSelectedStockroom($event){

      }

      heandleSelectedSupplier($event){

      }

      heandleSelectedShiping($event){

      }

      heandleSelectedPayment(event){

      }

}
