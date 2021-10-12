import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupSatuanAturanPakaiModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupSatuanAturanPakaiModel[];
    message: string;
}

export interface ISetupSatuanAturanPakaiModel {
    id_satuan_aturan_pakai: number;
    satuan_aturan_pakai: string;
}