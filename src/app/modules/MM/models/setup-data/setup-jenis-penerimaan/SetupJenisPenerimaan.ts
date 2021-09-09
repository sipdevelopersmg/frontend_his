import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupJenisPenerimaanModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupJenisPenerimaanModel[];
    message: string;
}

export interface ISetupJenisPenerimaanModel {
    kode_jenis_penerimaan: string;
    jenis_penerimaan: string;
    is_active: boolean;
    user_created: number;
}

export interface ISetActiveJenisPenerimaanModel {
    kode_jenis_penerimaan : number;
    user_deactived : number;
}