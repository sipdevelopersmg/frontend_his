import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupLabelPemakaianObatModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupLabelPemakaianObatModel[];
    message: string;
}

export interface ISetupLabelPemakaianObatModel {
    id_label_pemakaian_obat: number;
    kode_label_pemakaian_obat: string;
    nama_label_pemakaian_obat: string;
    berapa_kali_per_hari: string;  
    is_active: boolean;
}

export interface ISetActiveSetupLabelPemakaianObatModel {
    id_label_pemakaian_obat : number;
}