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

  public total : Number = 0; 
  public jumlahItem : Number = 0;

  constructor() { }

  addDataDetail(detail: TrKontrakSpjbDetailItemInsert) {
    this.dataDetail = [
      ...this.dataDetail, 
      detail
    ];
    this.sum();
  }

  updateFromInline(index:number,data: TrKontrakSpjbDetailItemInsert,rowData: TrKontrakSpjbDetailItemInsert){
    data.qty_kontrak = data.qty_kontrak_satuan_besar * data.isi;
    if(data.sub_total_kontrak!=rowData.sub_total_kontrak){
      data.harga_satuan = data.sub_total_kontrak / data.qty_kontrak;
    }else{
      data.sub_total_kontrak = data.qty_kontrak * data.harga_satuan;
    }
    this.dataDetail[index] = data; 
    this.sum();
  }

  removeDataDetail(id_item: number) {
    this.dataDetail = this.dataDetail.filter(dataDetail => dataDetail.id_item !== id_item);
    this.sum();
  }

  editBanyak(index:number,banyak: number){
    this.dataDetail[index].qty_kontrak_satuan_besar = banyak;
    this.dataDetail[index].qty_kontrak = banyak * this.dataDetail[index].isi;
    this.dataDetail[index].sub_total_kontrak = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
  }

  editExpired(index:number,expired: string){
    this.dataDetail[index].tanggal_maksimal_expired_date=expired;
  }

  editHarga(index:number,harga: number){
    this.dataDetail[index].harga_satuan = harga;
    this.dataDetail[index].sub_total_kontrak = harga * this.dataDetail[index].qty_kontrak; 
  }

  editSubtotal(index:number,subtotal: number){
    this.dataDetail[index].sub_total_kontrak = subtotal;
    this.dataDetail[index].harga_satuan = subtotal/this.dataDetail[index].qty_kontrak
  }
  
  sum() : void{
    this.total = this.dataDetail.sum('sub_total_kontrak');
    this.jumlahItem = this.dataDetail.sum('qty_kontrak_satuan_besar');
  }

}
