import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTemperaturItemModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTemperaturItemModel[];
    message: string;
}

export interface ISetupTemperaturItemModel {
    id_temperatur_item: number;
    temperatur_item: string;
}