import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupGenerikModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupGenerikModel[];
    message: string;
}

export interface ISetupGenerikModel {
    id_generik: number;
    nama_generik: string;
    alias_generik: string;
    no_generik: string;
}

export interface ISetActiveSetupGenerikModel {
    id_generik : number;
}