import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupSediaanObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupSediaanObatModel[];
    message: string;
}

export interface ISetupSediaanObatModel {
    id_sediaan_obat: number;
    sediaan_obat: string;
}

export interface ISetActiveSetupSediaanObatModel {
    id_sediaan_obat : number;
}