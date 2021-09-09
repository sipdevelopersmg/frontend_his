import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as configGrid from './json/detailItem.json'
import { Location } from '@angular/common'
import { PenerimaanService } from 'src/app/modules/MM/services/pemasukan/penerimaan/penerimaan.service';
@Component({
  selector: 'app-view-penerimaan',
  templateUrl: './view-penerimaan.component.html',
  styleUrls: ['./view-penerimaan.component.css']
})
export class ViewPenerimaanComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  ConfigGrid = configGrid;

  constructor(
    private formBuilder: FormBuilder,
    public penerimaanService:PenerimaanService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_penerimaan: ['', []],
      tanggal_penerimaan: [null, []],
      kode_jenis_penerimaan: ['', []],
      nama_stockroom: [0, []],
      nama_supplier: [0, []],
      pemesanan_id: [0, []],
      nomor_surat_jalan_supplier: ['', []],
      tanggal_surat_jalan_supplier: [null, []],
      id_shipping_method: [0, []],
      id_payment_term: [0, []],
      tanggal_jatuh_tempo_bayar: [null, []],
      keterangan: ['', []],
      jumlah_item: [0, []],
      sub_total_1: [0, []],
      total_disc: [0, []],
      sub_total_2: [0, []],
      total_tax: [0, []],
      total_transaksi: [0, []],
      biaya_kirim: [0, []],
      biaya_asuransi: [0, []],
      biaya_lain: [0, []],
      potongan_nominal: [0, []],
      potongan_prosentase: [0, []],
      total_uang_muka: [0, []],
      total_tagihan: [0, []],
    });
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    console.log(pemesanan_id);
    this.onLoadDetailData(pemesanan_id);
  }

  onLoadDetailData(pemesanan_id){
      this.penerimaanService.onGetById(pemesanan_id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_penerimaan      :result.data.nomor_penerimaan,
            tanggal_penerimaan    : result.data.tanggal_penerimaan,
            kode_jenis_penerimaan :result.data.kode_jenis_penerimaan,
            nama_stockroom        :result.data.nama_stockroom,
            nama_supplier         :result.data.nama_supplier,
            pemesanan_id          :result.data.pemesanan_id,
            nomor_surat_jalan_supplier   :result.data.nomor_surat_jalan_supplier,
            tanggal_surat_jalan_supplier :result.data.tanggal_surat_jalan_supplier,
            id_shipping_method    :result.data.id_shipping_method,
            id_payment_term       :result.data.id_payment_term,
            tanggal_jatuh_tempo_bayar     :result.data.tanggal_jatuh_tempo_bayar,
            keterangan            :result.data.keterangan,
            jumlah_item           :result.data.jumlah_item,
            sub_total_1           :result.data.sub_total_1,
            total_disc            :result.data.total_disc,
            sub_total_2           :result.data.sub_total_2,
            total_tax             :result.data.total_tax,
            total_transaksi       :result.data.total_transaksi,
            biaya_kirim           :result.data.biaya_kirim,
            biaya_asuransi        :result.data.biaya_asuransi,
            biaya_lain            :result.data.biaya_lain,
            potongan_nominal      :result.data.potongan_nominal,
            potongan_prosentase   :result.data.potongan_prosentase,
            total_uang_muka       :result.data.total_uang_muka,
            total_tagihan         :result.data.total_tagihan,
          })
          this.penerimaanService.setDetail(pemesanan_id);
      });
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
            this.location.back();
            break;
        case 'Validasi':
            console.log('Validasi')
            break;
        default:
            break;
    }
  }
  get tanggal_penerimaan() : AbstractControl { return this.formInput.get('tanggal_penerimaan') }
  get tanggal_surat_jalan_supplier() : AbstractControl { return this.formInput.get('tanggal_surat_jalan_supplier') }
  get tanggal_jatuh_tempo_bayar() : AbstractControl { return this.formInput.get('tanggal_jatuh_tempo_bayar') }
  get sub_total_1() : AbstractControl { return this.formInput.get('sub_total_1') }

  

}
