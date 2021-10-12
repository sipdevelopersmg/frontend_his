import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IVoucherPaymentModel {
    id_voucher?: number;
    nomor_urut_voucher?: number;
    kode_voucher?: string;
    nama?: string;
    nilai?: number;
    tanggal_expired?: Date;
    is_terpakai?: boolean;
    keterangan?: string;
    syarat_min_belanja?: number;
    user_inputed?: number;
    time_inputed?: Date;
    user_canceled?: number;
    time_canceled?: Date;
    reason_canceled?: string;
}

export class GetAllVoucherPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IVoucherPaymentModel[];
    message: string;
}

export class GetByIdVoucherPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IVoucherPaymentModel;
    message: string;
}

export class PostInsertVoucherPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class PutUpdateVoucherPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class DeleteVoucherPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}