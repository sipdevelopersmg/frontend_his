import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityHelperService {

    constructor() { }

    /**
     * @onRemoveInfo 
     * @Param Data: any, key: any[]
     * @Keterangan Menghapus key array yg ada pada Data
    */
    onRemoveInfo(Data: any, key: any[]): void {
        key.forEach((e) => {
            delete Data[e];
        });

        return Data;
    }

    /**
     * @onSplitKodeWilayahKecamatan 
     * @Param kode_kecamatan: any, Into: any[]
     * @Keterangan Memisahkan kode_kecamatan menjadi 3 array
     * @Keterangan Array 0 untuk kode_provinsi
     * @Keterangan Array 0 + Array 1 untuk kode_kota
    */
    onSplitKodeWilayahKecamatan(kode_kecamatan: any): object {
        const arr = kode_kecamatan.split('.');

        const wilayah = {
            kode_wilayah_provinsi: arr[0],
            kode_wilayah_kota: `${arr[0]}.${arr[1]}`,
        }

        return wilayah;
    }
}
