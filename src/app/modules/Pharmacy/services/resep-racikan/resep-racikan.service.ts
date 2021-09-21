import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResepRacikanModel } from '../../models/resep-racikan/resep-racikan.model';

@Injectable({
    providedIn: 'root'
})
export class ResepRacikanService {

    ResepRacikan = new BehaviorSubject([]);

    DetailResepRacikan = new BehaviorSubject([]);

    constructor() { }

    onGetResepRacikanDummy(): Observable<any> {
        const ResepRacikan: ResepRacikanModel[] = [
            {
                id_obat: 1, is_racikan :true, kode_obat: 'TES1', nama_obat: 'OBAT A', jumlah: 5, satuan: 'pcs', harga: 5000, diskon: 0, subtotal: 5000 * 5, detail_racikan: []
            },
            {
                id_obat: 2, is_racikan :false, kode_obat: 'TES2', nama_obat: 'OBAT B', jumlah: 1, satuan: '', harga: 5000, diskon: 0, subtotal: 5000, detail_racikan: []
            },
            {
                id_obat: 3, is_racikan :true, kode_obat: 'TES1', nama_obat: 'OBAT A', jumlah: 5, satuan: 'pcs', harga: 5000, diskon: 0, subtotal: 5000 * 5, detail_racikan: []
            },
            {
                id_obat: 4, is_racikan :false, kode_obat: 'TES2', nama_obat: 'OBAT B', jumlah: 1, satuan: '', harga: 5000, diskon: 0, subtotal: 5000, detail_racikan: [
                    {
                        id_obat: 4, kode_obat: 'TES21', nama_obat: 'HOLIMOX 500 MG', satuan: '', satuan_terkecil: 'TABLET', dosis_obat: 0.5, dosis_yg_diinginkan: 0.5, jumlah: 1, harga: 2500, subtotal: 2500
                    },
                    {
                        id_obat: 4, kode_obat: 'TES22', nama_obat: 'AZOMAX 500 MG', satuan: '', satuan_terkecil: 'TABLET', dosis_obat: 0.5, dosis_yg_diinginkan: 0.5, jumlah: 1, harga: 2500, subtotal: 2500
                    }
                ]
            },
        ];

        this.ResepRacikan.next(ResepRacikan);

        return this.ResepRacikan.asObservable();
    };

    onGetDetailResepRacikanDummy(): Observable<any> {
        const DetailResepRacikan = [];

        this.ResepRacikan.value.map((item: ResepRacikanModel) => {
            DetailResepRacikan.push(...item.detail_racikan);
        });

        this.DetailResepRacikan.next(DetailResepRacikan);

        return this.DetailResepRacikan.asObservable();
    }
}
