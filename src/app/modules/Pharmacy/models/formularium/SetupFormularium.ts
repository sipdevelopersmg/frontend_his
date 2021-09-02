import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupFormulariumModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupFormulariumModel[];
    message: string;
}

export interface ISetupFormulariumModel {
    id_formularium: number;
    id_generik: number;
    id_terapi: number;
    id_jenis_formularium: number;
    id_sediaan_obat: number;
    id_restriksi_obat: number;
    id_peresepan_maksimal: number;
    keterangan: string;
    tgl_berlaku: string;
    tgl_berakhir: string;
}

export interface ISetActiveSetupFormulariumModel {
    id_sediaan_obat : number;
}