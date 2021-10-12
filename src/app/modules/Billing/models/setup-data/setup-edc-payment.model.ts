import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IEdcPaymentModel {
    id_edc_payment?: number;
    kode_edc_payment?: string;
    nama_edc_payment?: string;
    keterangan?: string;
}

export class GetAllEdcPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IEdcPaymentModel[];
    message: string;
}

export class GetByIdEdcPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: IEdcPaymentModel;
    message: string;
}

export class PostInsertEdcPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class PutUpdateEdcPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class DeleteEdcPaymentModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}