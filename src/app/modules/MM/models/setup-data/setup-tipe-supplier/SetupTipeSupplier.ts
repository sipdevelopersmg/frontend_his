import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupTipeSupplierModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupTipeSupplierModel[];
    message: string;
}

export interface ISetupTipeSupplierModel {
    id_tipe_supplier: number;
    tipe_supplier: string;
    is_ap: boolean;
    is_active: boolean;
}

export interface ISetActiveTipeSupplierModel {
    id_tipe_supplier : number;
}