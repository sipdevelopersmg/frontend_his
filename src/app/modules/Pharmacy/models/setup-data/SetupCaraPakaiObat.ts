import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupCaraPakaiObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupCaraPakaiObatModel[];
    message: string;
}

export interface ISetupCaraPakaiObatModel {
    id_cara_pakai_obat: number;
    kode_cara_pakai_obat: string;
    nama_cara_pakai_obat: string;
    is_active: boolean;
}

export interface ISetActiveSetupCaraPakaiObatModel {
    id_cara_pakai_obat : number;
}