import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IPaymentMethodModel {
    id_payment_method?: number;
    payment_method?: string;
}

export class GetAllPaymentMethodModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPaymentMethodModel[];
    message: string
}

export interface IPaymentMethodDetailModel {
    id_payment_method?: number;
    id_payment_method_detail?: string;
    payment_method_detail?: string;
    charge?: string;
    id_bank_payment?: string;
    kode_bank_payment?: string;
    nama_bank_payment?: string;
}

export class GetAllPaymentMethodDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPaymentMethodDetailModel[];
    message: string
}

export class GetByIdPaymentMethodDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPaymentMethodDetailModel;
    message: string
}

export class PostInsertPaymentMethodDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class PutUpdatePaymentMethodDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class DeletePaymentMethodDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}