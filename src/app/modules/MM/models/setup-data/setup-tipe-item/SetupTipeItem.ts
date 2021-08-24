import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTipeItemModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTipeItemModel[];
    message: string;
}

export interface ISetupTipeItemModel {
    id_tipe_item: number;
    kode_tipe_item: string;
    tipe_item: string;
    is_active: boolean;
    user_created: number;
}

export interface ISetActiveTipeItemModel {
    id_tipe_item : number;
    user_deactived : number;
}