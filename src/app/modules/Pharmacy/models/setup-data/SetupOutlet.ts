import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupOutletModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupOutletModel[];
    message: string;
}

export interface ISetupOutletModel {
    id_outlet: number;
    id_stockroom: number;
    kode_outlet: string;
    nama_outlet: string;
    id_tipe_outlet: number;
    is_active: boolean;
    user_created: number;
}

export interface ISetActiveSetupOutletModel {
    id_outlet : number;
}