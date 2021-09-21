import { HttpResponseModel } from "../../../../modules/shared/models/Http-Operation/HttpResponseModel";
import { IDokter } from "./setup-dokter.model";

interface WaktuModel {
    id_jadwal_dokter: number,
    jam_mulai: any,
    jam_selesai: any,
    kuota: 15,
    keterangan: string
}

/**
 * @SetupHariModel base model Setup Hari
*/
export interface SetupHariModel {
    id_hari?: number;
    nama_hari?: string;
    waktu?: WaktuModel[];
}

/**
 * @GetAllSetupHariModel response model setelah request Get All Asal Hari
 * @Key : { responseResult: boolean, data: Asal SetupHariModel[], message: string }
 */
export class GetAllSetupHariModel implements HttpResponseModel {
    responseResult: boolean;
    data: SetupHariModel[];
    message: string;
}

export interface JadwalDokterModel {
    id_dokter?: number;
    id_poli?: number;
    nama_dokter?: string;
    nama_poli?: string;
    jadwal?: SetupHariModel[];
}

/**
 * @PostGetAllJadwalDokterByIdDokterAndIdPoliModel response model setelah request Get All Jadwal Dokter
 * @Key : { responseResult: boolean, data: Asal SetupHariModel[], message: string }
 */
export class PostGetAllJadwalDokterByIdDokterAndIdPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: JadwalDokterModel;
    message: string;
}

/**
 * @GetAllSetupHariModel response model setelah request Get All Asal Hari
 * @Key : { responseResult: boolean, data: Asal SetupHariModel[], message: string }
 */
export class PostGetAllDokterByIdPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDokter[];
    message: string;
}