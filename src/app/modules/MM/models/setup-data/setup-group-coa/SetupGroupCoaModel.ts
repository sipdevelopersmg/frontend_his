import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupGroupCoaModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupGroupCoaModel[];
    message: string;
}

export interface ISetupGroupCoaModel {
    id_grup_coa: number;
    grup_coa: string;
    deskripsi: string;
    is_active: boolean;
}

export interface ISetActiveSetupGroupCoaModel {
    id_grup_coa : number;
}