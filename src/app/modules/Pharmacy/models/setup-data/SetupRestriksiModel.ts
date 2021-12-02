import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupRestriksiModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupRestriksiModel[];
    message: string;
}

export interface ISetupRestriksiModel {
    id_restriksi_obat: number;
    nama_restriksi: string;
}