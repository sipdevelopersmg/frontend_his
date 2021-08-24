import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupCoaModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupCoaModel[];
    message: string;
}

export interface ISetupCoaModel {
    id_coa: number;
    id_coa_parent: string;
    id_grup_coa: string;
    kode_coa: string;
    deskripsi: string;
    saldo: number;
    is_active: boolean;
    user_created: number;
    time_created:Date;
    user_deactived:number | null;
    time_deactived:Date | null;
}

export interface ISetActiveSetupCoaModel {
    id_coa : number;
}