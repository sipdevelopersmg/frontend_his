import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupRestriksiObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupRestriksiObatModel[];
    message: string;
}

export interface ISetupRestriksiObatModel {
    id_restriksi_obat: number;
    nama_restriksi: string;
}

export interface ISetActiveSetupRestriksiObatModel {
    id_restriksi_obat : number;
}