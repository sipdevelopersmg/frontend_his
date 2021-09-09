import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupShippingMethodModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupShippingMethodModel[];
    message: string;
}

export interface ISetupShippingMethodModel {
    id_shipping_method:number;
    shipping_method:string;
}
