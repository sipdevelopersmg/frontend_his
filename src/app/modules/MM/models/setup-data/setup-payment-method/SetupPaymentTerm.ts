import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupPaymentTermModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupPaymentTermModel[];
    message: string;
}

export interface ISetupPaymentTermModel {
    id_payment_term: number;
    payment_term: string;
}