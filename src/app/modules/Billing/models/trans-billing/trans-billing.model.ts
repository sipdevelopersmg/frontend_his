import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IDataBillingModel {
    informasi_pasien?: IInformasiPasienModel;
    tiket?: ITiketModel;
    tdmk?: ITdmkModel;
    tdlab?: ITdLabModel;
    tdrad?: ITdRadModel;
    resep?: IResepBillingModel;
}

export interface IInformasiPasienModel {
    id_register: number;
    no_register: string;
    id_person: number;
    link_foto: string;
    nama_foto: string;
    no_rekam_medis: string;
    tgl_admisi: string;
    nama_pasien: string;
    alamat_pasien: string;
    nama_debitur: string;
    nama_kelas: string;
    total_biaya?: number;
}

export interface ITiketModel {
    jenis_transaksi: string
    total: number
    detail: IDetailTiketModel[]
}

export interface IDetailTiketModel {
    id_transaksi: number
    tgl_order: string
    kode_setup_tarif: string
    nama_setup_tarif: string
    qty: number
    unit_amount: number
    total_amount: number
    nama_kelas: string
    nama_poli: string
}

export interface ITdmkModel {
    jenis_transaksi: string
    total: number
    detail: IDetailTdmkModel[]
}

export interface IDetailTdmkModel {
    id_transaksi: number
    tgl_order: string
    kode_setup_tarif: string
    nama_setup_tarif: string
    qty: number
    unit_amount: number
    total_amount: number
    nama_kelas: string
    nama_poli: string
}

export interface ITdLabModel {
    jenis_transaksi: string
    total: number
    detail: ITdLabDetailModel[]
}

export interface ITdLabDetailModel {
    id_transaksi: number
    tgl_order: string
    kode_setup_tarif: string
    nama_setup_tarif: string
    qty: number
    unit_amount: number
    total_amount: number
    nama_kelas: string
    nama_poli: string
}

export interface ITdRadModel {
    jenis_transaksi: string
    total: number
    detail: ITdRadDetailModel[]
}

export interface ITdRadDetailModel {
    id_transaksi: number
    tgl_order: string
    kode_setup_tarif: string
    nama_setup_tarif: string
    qty: number
    unit_amount: number
    total_amount: number
    nama_kelas: string
    nama_poli: string
}

export interface IResepBillingModel {
    jenis_transaksi: string
    total: number
    detail: IResepBillingDetailModel[]
}

export interface IResepBillingDetailModel {
    penjualan_obat_id: number;
    tanggal_penjualan_obat: string;
    nomor_penjualan_obat: string;
    nama_outlet: string;
    nomor_resep: string;
    nama_dokter: string;
    sub_total: number;
    biaya_kirim: number;
    biaya_lain: number;
    potongan: number;
    total_transaksi: number;
    status_bill: string;
    details: IResepBillingSubDetailModel[];
}

export interface IResepBillingSubDetailModel {
    penjualan_obat_id?: number;
    no_urut?: number;
    nama_obat?: string;
    qty_jual?: number;
    harga_satuan?: number;
    sub_total?: number;
}

export class GetDataBillingModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDataBillingModel;
    message: string;
}