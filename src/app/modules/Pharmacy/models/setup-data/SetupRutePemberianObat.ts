import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupRutePemberianObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupRutePemberianObatModel[];
    message: string;
}

export interface ISetupRutePemberianObatModel {
    id_rute_pemberian_obat: number;
    nama_rute_pemberian_obat: string;
    rute_pasien: string;
    ordered: number;
    is_parenteral: boolean;
}

export interface ISetActiveSetupRutePemberianObatModel {
    id_rute_pemberian_obat : number;
}