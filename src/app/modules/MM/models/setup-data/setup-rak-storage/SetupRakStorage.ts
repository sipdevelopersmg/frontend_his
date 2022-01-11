import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupRakStorageModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupRakStorageModel[];
    message: string;
}

export interface ISetupRakStorageModel {
    kode_rak_storage    : string;
    nama_rak_storage    : string;
    id_stockroom        : string;
    id_penanggung_jawab_rak_storage: string;
    keterangan          : number;
}
