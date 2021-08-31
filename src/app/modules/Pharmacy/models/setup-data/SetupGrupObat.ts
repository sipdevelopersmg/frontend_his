import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupGrupObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupGrupObatModel[];
    message: string;
}

export interface ISetupGrupObatModel {
    id_grup_obat: number;
    kode_grup_obat: string;
    nama_grup_obat: string;
    is_active: boolean;
}

export interface ISetActiveSetupGrupObatModel {
    id_grup_obat : number;
}