import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupMekanismeReturModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupMekanismeReturModel[];
    message: string;
}

export interface ISetupMekanismeReturModel {
    id_tipe_item: number;
    kode_tipe_item: string;
    tipe_item: string;
    is_active: boolean;
    user_created: number;
}

export interface ISetActiveMekanismeReturModel {
    id_tipe_item : number;
    user_deactived : number;
}