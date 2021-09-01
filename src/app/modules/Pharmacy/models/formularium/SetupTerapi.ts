import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTerapiModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTerapiModel[];
    message: string;
}

export interface ISetupTerapiModel {
    id_terapi: number;
    kode_terapi: string;
    no_terapi: string;
    nama_terapi: string;
    id_terapi_parent: number;
    level_rekursif_terapi: number;
}

export interface ISetActiveSetupTerapiModel {
    id_sediaan_obat : number;
}