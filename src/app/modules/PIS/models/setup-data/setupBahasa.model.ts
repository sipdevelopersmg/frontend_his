import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupBahasaModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupBahasaModel[];
    message: string;
}

export interface ISetupBahasaModel {
    id_bahasa: number;
    kode_bahasa: string;
    nama_bahasa: string;

}