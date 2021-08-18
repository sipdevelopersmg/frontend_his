import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrKontrakSpjbDetailItemInsert } from 'src/app/modules/MM/models/penerimaan/kontrak-pengadaan/KontrakPengadaanModel';
import 'src/app/prototype/ArrPrototype';

@Injectable({
    providedIn: 'root'
})

export class InputKontrakPengadaanService {

    private readonly _dataDetail = new BehaviorSubject<TrKontrakSpjbDetailItemInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrKontrakSpjbDetailItemInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrKontrakSpjbDetailItemInsert[]) {
        this._dataDetail.next(val);
    }

    public total: Number = 0;
    public jumlahItem: Number = 0;

    constructor() { }

    addDataDetail(detail: TrKontrakSpjbDetailItemInsert) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrKontrakSpjbDetailItemInsert, rowData: TrKontrakSpjbDetailItemInsert) {
        let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        let isi = data.satuan[indexsatuan].isi;
        data.isi = isi;
        data.qty_kontrak = data.qty_kontrak_satuan_besar * isi;

        if (data.sub_total_kontrak != rowData.sub_total_kontrak) {
            data.harga_satuan = data.sub_total_kontrak / data.qty_kontrak;
        } else {
            data.sub_total_kontrak = data.qty_kontrak * data.harga_satuan;
        }

        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_kontrak_satuan_besar = banyak;
        this.dataDetail[index].qty_kontrak = banyak * this.dataDetail[index].isi;
        this.dataDetail[index].sub_total_kontrak = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
    }

    editExpired(index: number, expired: string) {
        this.dataDetail[index].tanggal_maksimal_expired_date = expired;
    }

    editHarga(index: number, harga: number) {
        this.dataDetail[index].harga_satuan = harga;
        this.dataDetail[index].sub_total_kontrak = harga * this.dataDetail[index].qty_kontrak;
    }

    editSubtotal(index: number, subtotal: number) {
        this.dataDetail[index].sub_total_kontrak = subtotal;
        this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_kontrak
    }

    editSatuan(index: number, satuan: string) {
        // console.log(this.dataDetail[index].satuan);
        let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar = satuan;
        this.dataDetail[index].isi = isi;
        this.dataDetail[index].qty_kontrak = this.dataDetail[index].qty_kontrak_satuan_besar * isi;
        this.dataDetail[index].sub_total_kontrak = this.dataDetail[index].qty_kontrak * this.dataDetail[index].harga_satuan;

    }

    sum(): void {
        this.total = this.dataDetail.sum('sub_total_kontrak');
        this.jumlahItem = this.dataDetail.sum('qty_kontrak_satuan_besar');
    }

}
