import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IBankPaymentModel {
    id_bank_payment?: number;
    kode_bank_payment?: string;
    nama_bank_payment?: string;
    keterangan?: string;
    biaya?: number;
}

export class GetAllBankPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBankPaymentModel[];
    message: string;
}

export class GetByIdBankPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBankPaymentModel;
    message: string;
}

export class PostInsertBankPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class PutUpdateBankPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class DeleteBankPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}