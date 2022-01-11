import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupPenanggungJawabRakStorageModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupPenanggungJawabRakStorageModel[];
    message: string;
}

export interface ISetupPenanggungJawabRakStorageModel {
    nik_penanggung_jawab_rak_storage: string;
    nama_penanggung_jawab_rak_storage: string;
    id_supplier: string;
    keterangan: number;
}
