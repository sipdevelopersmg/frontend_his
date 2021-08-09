import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupSatuanModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupSatuanModel[];
    message: string;
}

export interface ISetupSatuanModel {
    kode_satuan: number;
    nama_satuan: number;
    is_active: number;
}

export interface SetActiveModel {
    kode_satuan : string;
}