import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as GridConfig from './json/grid.config.json';
@Component({
  selector: 'app-input-kontrak-pengadaan',
  templateUrl: './input-kontrak-pengadaan.component.html',
  styleUrls: ['./input-kontrak-pengadaan.component.css']
})
export class InputKontrakPengadaanComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
      { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
      { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
    ];
  // import * as GridConfig from './json/grid.config.json';
  public GridConfig = GridConfig;
  GridDetailToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
  ];
  modalRef: BsModalRef;

  urlSupplier = '';

  formKontrak: FormGroup;

  @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
  
  constructor(private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.formKontrak = this.formBuilder.group({
      id_supplier: ["", Validators.required],
      nomor_spbbj: ["", Validators.required],
      nomor_kontrak: ["", Validators.required],
      tanggal_ttd_kontrak: [null, Validators.required],
      tanggal_berlaku_kontrak: [null, Validators.required],
      tanggal_berakhir_kontrak: [null, Validators.required],
      judul_pekerjaan: ["", Validators.required],
      tahun_anggaran: ["", Validators.required],
      keterangan: ["", Validators.required],
      total_transaksi_kontrak :  [3000000, Validators.required],
      jumlah_item_kontrak :  [5, Validators.required],
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

    heandleSelectedSupplier($event){
      this.id_supplier.setValue($event.id_supplier);
    }

    get id_supplier(): AbstractControl { return this.formKontrak.get('id_supplier'); }

}
