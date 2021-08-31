import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTipeOutletModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTipeOutletModel[];
    message: string;
}

export interface ISetupTipeOutletModel {
    id_tipe_outlet: number;
    tipe_outlet: string;
    keterangan: string;
}