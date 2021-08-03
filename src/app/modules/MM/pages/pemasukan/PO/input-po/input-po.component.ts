import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import * as GridConfig from './json/grid.config.json';

@Component({
  selector: 'app-input-po',
  templateUrl: './input-po.component.html',
  styleUrls: ['./input-po.component.css']
})
export class InputPOComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
  ];

  public GridConfig = GridConfig;

  GridDetailToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
  ];

  modalRef: BsModalRef;

  formPO: FormGroup;

  url = '';

  constructor(private formBuilder:FormBuilder) { }

    ngOnInit(): void {

      this.formPO = this.formBuilder.group({
        tanggal_pemesanan: [null, Validators.required],
        tanggal_expired_pemesanan: [null, Validators.required],
        id_stockroom: ['', Validators.required],
        id_supplier: ['', Validators.required],
        keterangan: ['', Validators.required],
        total_transaksi_pesan: [3000, Validators.required],
        jumlah_item_pesan: [6, Validators.required],
      });

    }

      onClickButtonNav(ButtonId: string): void {
          switch (ButtonId) {
              case 'Save':
                  break;
              case 'Reset':
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

      heandleSelectedStockroom($event){

      }

      heandleSelectedSupplier($event){

      }
}
