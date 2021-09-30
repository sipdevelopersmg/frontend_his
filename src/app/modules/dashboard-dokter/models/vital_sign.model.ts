import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface IVitalSignModel {
    id_vital_sign?: number;
    tanggal_periksa?: string;
    id_register?: number;
    id_dokter?: number;
    tinggi_badan_cm?: number;
    berat_badan_kg?: number;
    suhu_badan_celcius?: number;
    tekanan_darah_atas?: number;
    tekanan_darah_bawah?: number;
    saturasi_oksigen?: number;
    denyut_nadi_per_menit?: number;
    respirasi_nafas_per_menit?: number;
    keterangan?: string;
    user_inputed?: number;
    time_inputed?: string;
}

export class GetAllVitalSignModel implements HttpResponseModel {
    responseResult: boolean;
    data: IVitalSignModel[];
    message: string;
}