import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTipeStockroomModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTipeStockroomModel[];
    message: string;
}

export interface ISetupTipeStockroomModel {
    id_tipe_stockroom: number;
    tipe_stockroom: string;
    keterangan: boolean;
}