import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

// ** POST SAVE BILLING IRDA
export interface IItemTransaksiBillingRawatDaruratModel {
    id_transaksi: number
    qty: number
    comp_fee: number
    iur_biaya: number
    subsidi: number
    tagihan: number
    unit_amount: number
    total_amount: number
}

export interface IPostSavePulangBillingRawatDaruratModel {
    id_register: number
    total_amount: number
    charge_amount: number
    iur_amount: number
    subsidi_amount: number
    claim_amount: number
    id_kondisi_pulang: number
    id_cara_pulang: number
    item_transaksi: IItemTransaksiBillingRawatDaruratModel[]
}

export class PostSavePulangBillingRawatDaruratModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

// ** POST SAVE PELUNASAN
export interface IItemPaymentTransaksiBillingRawatDaruratModel {
    jumlah_payment: number
    keterangan: string
    pembayar: string
}

export interface IItemPaymentDetailTransaksiBillingRawatDaruratModel {
    id_payment_method: number
    id_payment_method_detail: number
    jumlah_bayar: number
    id_voucher: number
    id_bank_payment: number
    id_edc_payment: number
    trace_number: string
    jenis_kartu: string
    card_holder: string
    nomor_kartu: string
}

export interface IPostSavePelunasanBillingRawatDaruratModel {
    id_register: number
    payment: IItemPaymentTransaksiBillingRawatDaruratModel
    payment_detail: IItemPaymentDetailTransaksiBillingRawatDaruratModel[]
}

export class PostSavePelunasanBillingRawatDaruratModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

// ** POST SAVE REPROSES
export interface IPostSaveReprosesBillingRawatDaruratModel {
    id_register: number
    total_amount: number
    charge_amount: number
    iur_amount: number
    subsidi_amount: number
    claim_amount: number
    item_transaksi: IItemTransaksiBillingRawatDaruratModel[]
}

export class PostSaveReprosesBillingRawatDaruratModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}