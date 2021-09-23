import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTambahanAturanPakaiModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTambahanAturanPakaiModel[];
    message: string;
}

export interface ISetupTambahanAturanPakaiModel {
    id_tambahan_aturan_pakai: number;
    tambahan_aturan_pakai: string;
}