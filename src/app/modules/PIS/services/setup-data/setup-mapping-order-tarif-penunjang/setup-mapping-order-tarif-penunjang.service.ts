import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SetupMappingOrderTarifPenunjangService {

    JenisPenunjang = new BehaviorSubject<any>([]);

    TarifOrderLaboratorium = new BehaviorSubject<any>([]);

    TarifOrderRadiologi = new BehaviorSubject<any>([]);

    constructor() { }

    onGetJenisPenunjang(): void {
        const JenisPenunjang = [
            { id: 1, jenis_penunjang: 'LABORATORIUM' },
            { id: 2, jenis_penunjang: 'RADIOLOGI' },
        ];

        this.JenisPenunjang.next(JenisPenunjang);
    };

    onGetTarifOrderLaboratorium(): void {
        const TarifOrderLab = [
            {
                id: 1,
                kode_kelompok_tarif: "BIO",
                nama_kelompok_tarif: "BIOLOGI KLINIK",
                child: [
                    {
                        id: 11,
                        kode_kelompok_tarif: "BIOA",
                        nama_kelompok_tarif: "BIOLOGI KLINIK",
                    }
                ]
            },
            {
                id: 2,
                kode_kelompok_tarif: "DRH",
                nama_kelompok_tarif: "BANK DARAH",
                child: [
                    {
                        id: 21,
                        kode_kelompok_tarif: "DRHA",
                        nama_kelompok_tarif: "BANK DARAH",
                    }
                ]
            },
            {
                id: 3,
                kode_kelompok_tarif: "HEM",
                nama_kelompok_tarif: "HEMATOLOGI",
                child: [
                    {
                        id: 31,
                        kode_kelompok_tarif: "HEMA",
                        nama_kelompok_tarif: "DARAH RUTIN",
                    },
                    {
                        id: 32,
                        kode_kelompok_tarif: "HEMB",
                        nama_kelompok_tarif: "LUAR PAKET",
                    },
                    {
                        id: 33,
                        kode_kelompok_tarif: "HEMC",
                        nama_kelompok_tarif: "KOAGULASI",
                    },
                    {
                        id: 34,
                        kode_kelompok_tarif: "HEMD",
                        nama_kelompok_tarif: "BMP",
                    },
                ]
            },
            {
                id: 4,
                kode_kelompok_tarif: "IMU",
                nama_kelompok_tarif: "IMUNOLOGI",
                child: [
                    {
                        id: 41,
                        kode_kelompok_tarif: "IMUA",
                        nama_kelompok_tarif: "MARKER RHEMATIK",
                    },
                    {
                        id: 42,
                        kode_kelompok_tarif: "IMUB",
                        nama_kelompok_tarif: "MARKER HEPATITIS",
                    },
                    {
                        id: 43,
                        kode_kelompok_tarif: "IMUC",
                        nama_kelompok_tarif: "MARKER TUMOR",
                    },
                    {
                        id: 44,
                        kode_kelompok_tarif: "IMUD",
                        nama_kelompok_tarif: "MARKER TIROID",
                    },
                    {
                        id: 45,
                        kode_kelompok_tarif: "IMUE",
                        nama_kelompok_tarif: "PANEL TORCH",
                    },
                    {
                        id: 46,
                        kode_kelompok_tarif: "IMUF",
                        nama_kelompok_tarif: "HORMON REPRODUKSI",
                    },
                    {
                        id: 47,
                        kode_kelompok_tarif: "IMUG",
                        nama_kelompok_tarif: "LAIN - LAIN",
                    },
                ]
            },
        ];

        this.TarifOrderLaboratorium.next(TarifOrderLab);
    }

    onGetTarifOrderRadiologi(): void {
        const TarifOrderRad = [
            {
                id: 1,
                kode_kelompok_tarif: "MRI",
                nama_kelompok_tarif: "MRI",
                child: [
                    {
                        id: 11,
                        kode_kelompok_tarif: "MRIA",
                        nama_kelompok_tarif: "MRI 1,5 T - CRANIUM",
                    },
                    {
                        id: 12,
                        kode_kelompok_tarif: "MRIB",
                        nama_kelompok_tarif: "MRI - VERTEBRATA",
                    },
                    {
                        id: 13,
                        kode_kelompok_tarif: "MRIC",
                        nama_kelompok_tarif: "MRI 1,5 T - EKSTREMITAS ATAS",
                    },
                    {
                        id: 14,
                        kode_kelompok_tarif: "MRID",
                        nama_kelompok_tarif: "MRI 1,5 T - EKSTREMITAS BAWAH",
                    },
                    {
                        id: 15,
                        kode_kelompok_tarif: "MRIE",
                        nama_kelompok_tarif: "MRI 1,5 T - BODY",
                    },
                    {
                        id: 16,
                        kode_kelompok_tarif: "MRIF",
                        nama_kelompok_tarif: "MRI 1,5 T - PERIFER",
                    },
                ]
            },
            {
                id: 2,
                kode_kelompok_tarif: "NKK",
                nama_kelompok_tarif: "NON KONVENSIONAL",
                child: [
                    {
                        id: 21,
                        kode_kelompok_tarif: "NKKA",
                        nama_kelompok_tarif: "MSCT 64 SLICES - CRANIUM",
                    },
                    {
                        id: 22,
                        kode_kelompok_tarif: "NKKB",
                        nama_kelompok_tarif: "MSCT 64 SLICES - VERTEBRATA",
                    },
                    {
                        id: 23,
                        kode_kelompok_tarif: "NKKC",
                        nama_kelompok_tarif: "MSCT 64 SLICES - EKSTREMITAS ATAS",
                    },
                    {
                        id: 24,
                        kode_kelompok_tarif: "NKKD",
                        nama_kelompok_tarif: "MSCT 64 SLICES - EKSTREMITAS BAWAH",
                    },
                ]
            },
            {
                id: 3,
                kode_kelompok_tarif: "USG",
                nama_kelompok_tarif: "USG KHUSUS",
                child: [
                    {
                        id: 31,
                        kode_kelompok_tarif: "USGA",
                        nama_kelompok_tarif: "USG -MUSCOLOSKLETAL",
                    },
                    {
                        id: 32,
                        kode_kelompok_tarif: "USGB",
                        nama_kelompok_tarif: "ORGAN",
                    },
                    {
                        id: 33,
                        kode_kelompok_tarif: "USGC",
                        nama_kelompok_tarif: "USG - GUIDING",
                    },
                    {
                        id: 34,
                        kode_kelompok_tarif: "USGD",
                        nama_kelompok_tarif: "USG - DOPPLER",
                    }
                ]
            },
        ];

        this.TarifOrderRadiologi.next(TarifOrderRad);
    }
}
