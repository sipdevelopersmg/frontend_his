import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupGrupItemModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupGrupItemModel[];
    message: string;
}

export interface ISetupGrupItemModel {
    id_grup_item: number
    id_tipe_item: number
    kode_grup_item: string
    grup_item: string
    last_no: number
    id_coa_persediaan: number
    id_coa_pendapatan: number
    id_coa_biaya: number
}

export interface ISetActiveSetupGrupItemModel {
    id_grup_item : number;
}