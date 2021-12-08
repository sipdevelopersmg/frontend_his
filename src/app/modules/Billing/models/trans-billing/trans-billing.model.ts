import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IDataBillingModel {
    informasi_pasien?: IInformasiPasienModel;
    tiket?: ITiketModel;
    tdmk?: ITdmkModel;
    tdlab?: ITdLabModel;
    tdrad?: ITdRadModel;
    resep?: IResepBillingModel;
    akomodasi?: IAkomodasiBillingModel[];
    akomodasi_detail?: IAkomodasiDetailBillingModel;
    riwayat_kunjungan_pasien?: any[];
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
    status_billing?: string;
    nama_poli?: string;
    nama_dokter?: string;
    bed_no?: string;
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
    id_transaksi_obat: number
    id_register: number
    penjualan_obat_id: number
    penjualan_obat_detail_id: number
    time_inputed_penjualan_obat: string
    tgl_transaksi: string
    kode_outlet: string
    nama_outlet: string
    id_obat: number
    kode_obat: string
    nama_obat: string
    qty: number
    qty_charge: number
    qty_claim: number
    qty_return: number
    qty_subsidi: number
    unit_amount: number
    total_amount: number
    charge_amount: number
    comp_fee: number
    subsidi: number
    iur_biaya: number
    status_bayar: string
}

export interface IAkomodasiBillingModel {
    id_transaksi_akomodasi: number
    id_register: number
    id_bed_history: number
    id_poli: number
    kode_poli: string
    nama_poli: string
    id_setup_room: number
    room_no: string
    room_descr: string
    id_setup_bed_room: number
    bed_no: string
    id_kelas_pelayanan: number
    nama_kelas: string
    tgl_perawatan: string
}

export interface IAkomodasiDetailBillingModel {
    jenis_transaksi: string
    total: number
    detail: AkomodasiDetailModel[]
}

export interface AkomodasiDetailModel {
    id_transaksi_akomodasi_ekstrak: number
    id_transaksi_akomodasi: number
    id_register: number
    tanggal_akomodasi: string
    kode_setup_tarif: string
    nama_setup_tarif: string
    id_setup_room: number
    room_no: string
    room_descr: string
    id_setup_bed_room: number
    bed_no: string
    id_kelas: number
    nama_kelas: string
    hospital_fee: number
    anas_fee: number
    medical_fee: number
    add_fee: number
    comp_fee: number
    cito_fee: number
    qty: number
    unit_amount: number
    total_amount: number
    tagihan: number
    iur_biaya: number
    subsidi: number
    charge_amount: number
    status_bayar: string
}

export class GetDataBillingModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDataBillingModel;
    message: string;
}

export interface GetDataAkomodasiPasienModel {
    akomodasi: IAkomodasiBillingModel[];
    akomodasi_detail: IAkomodasiDetailBillingModel;
}