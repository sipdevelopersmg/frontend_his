import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTerapiGenerikModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTerapiGenerikModel[];
    message: string;
}

export interface ISetupTerapiGenerikModel {
    id_terapi: number;
    id_generik: number;
    no_terapi_generik: string;
}

export interface ISetActiveSetupTerapiGenerikModel {
    id_sediaan_obat : number;
}