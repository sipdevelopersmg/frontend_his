import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupMetodeRacikanModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupMetodeRacikanModel[];
    message: string;
}

export interface ISetupMetodeRacikanModel {
    id_metode_racikan: number;
    metode_racikan: string;
}