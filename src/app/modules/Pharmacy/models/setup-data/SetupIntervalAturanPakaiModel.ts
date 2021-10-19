import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupIntervalAturanPakaiModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupIntervalAturanPakaiModel[];
    message: string;
}

export interface ISetupIntervalAturanPakaiModel {
    id_interval_aturan_pakai: number;
    interval_aturan_pakai: string;
}