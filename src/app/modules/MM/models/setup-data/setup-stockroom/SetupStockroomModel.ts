import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupStockroomModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupStockroomModel[];
    message: string;
}

export interface ISetupStockroomModel {
    id_stockroom: number;
    kode_stockroom: string;
    nama_stockroom: string;
    id_tipe_stockroom: number;
    store_type: string;
    gl_no: string;
    gl_dept_name: string;
    id_stockroom_parent: string;
    is_show_persediaan: boolean;
}

export interface ISetActiveSetupStockroomModel {
    id_stockroom : number;
}