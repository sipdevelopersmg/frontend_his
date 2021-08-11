import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrKontrakSpjbDetailItemInsert } from 'src/app/modules/MM/models/penerimaan/kontrak-pengadaan/KontrakPengadaanModel';

@Injectable({
  providedIn: 'root'
})

export class InputKontrakPengadaanService {
  
  private readonly _dataDetail = new BehaviorSubject<TrKontrakSpjbDetailItemInsert[]>([]);
  
  readonly dataDetail$ = this._dataDetail.asObservable();
  
  get dataDetail(): TrKontrakSpjbDetailItemInsert[] {
    return this._dataDetail.getValue();
  }

  private set dataDetail(val: TrKontrakSpjbDetailItemInsert[]) {
    this._dataDetail.next(val);
  }

  constructor() { }

  addDataDetail(detail: TrKontrakSpjbDetailItemInsert) {
    this.dataDetail = [
      ...this.dataDetail, 
      detail
    ];
  }

  removeDataDetail(id_item: number) {
    this.dataDetail = this.dataDetail.filter(dataDetail => dataDetail.id_item !== id_item);
  }

  

}
