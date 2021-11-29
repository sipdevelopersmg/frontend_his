import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IGetAllPostingBillingModel {
    id_register: number
    no_register: string
    nama_pasien: string
    tgl_pulang_date: string
    tgl_pulang: string
    jenis_rawat: string
    id_debitur: number
    nama_debitur: string
    total_amount: number
    charge_amount: number
    withdrawal_amount: number
    paid_amount: number
    deposit_amount: number
    claim_amount: number
    subsidi_amount: number
    status: string
};

export class GetAllPostingBillingModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetAllPostingBillingModel;
    message: string;
}

interface ItemPostingBillingModel {
    id_register: number;
    id_debitur?: number;
}

export interface ISavePostingBillingModel {
    items: ItemPostingBillingModel[];
    tgl_jatuh_tempo: string;
}

export interface ISaveBatalPostingBillingModel {
    items: ItemPostingBillingModel[];
    reason_canceled: string;
}