import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @IPersonPasienForAdmisiRawatJalanModel base model Person Pasien For Admisi Rawat Jalan
*/
export interface IPersonPasienForAdmisiRawatJalanModel {
    /** @format int64 */
    id_person?: number;
    no_identitas?: string | null;
    no_rekam_medis?: string | null;
    full_name?: string | null;
    gender?: string | null;

    /** @format date-time */
    tanggal_lahir?: string;
    alamat_lengkap?: string | null;
    hand_phone?: string | null;
    keterangan?: string | null;
    kelurahan?: string | null;
    is_active?: boolean;
    sudah_teradmisi?: boolean;
}

/**
 * @GetAllPasienForSearchingAdmisiRawatJalanModel response model setelah request Get Pasien For Searching Admisi Rawat Jalan
 * @Key : { responseResult: boolean; data: IPersonPasienForAdmisiRawatJalanModel[]; message: string }
*/
export class GetAllPasienForSearchingAdmisiRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPersonPasienForAdmisiRawatJalanModel[];
    message: string;
}

/**
 * @GetAllPasienForLookupAdmisiRawatJalanModel response model setelah request Get Pasien For Lookup Admisi Rawat Jalan
 * @Key : { responseResult: boolean; data: IPersonPasienForAdmisiRawatJalanModel[]; message: string }
*/
export class GetAllPasienForLookupAdmisiRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPersonPasienForAdmisiRawatJalanModel[];
    message: string;
}

export interface PostAdmisiRawatJalanResponse {
    no_register: string,
    jenis_karcis: string,
    no_urut_antrian: string
}

/**
 * @PostAdmisiRawatJalanNonPenjaminModel response model setelah request Post Admisi Rawat Jalan Non Penjamin
 * @Key : { responseResult: boolean; data: PostAdmisiRawatJalanResponse; message: string }
*/
export class PostAdmisiRawatJalanNonPenjaminModel implements HttpResponseModel {
    responseResult: boolean;
    data: PostAdmisiRawatJalanResponse;
    message: string;
}

/**
 * @PostAdmisiRawatJalanWithPenjaminModel response model setelah request Post Admisi Rawat Jalan With Penjamin
 * @Key : { responseResult: boolean; data: PostAdmisiRawatJalanResponse; message: string }
*/
export class PostAdmisiRawatJalanWithPenjaminModel implements HttpResponseModel {
    responseResult: boolean;
    data: PostAdmisiRawatJalanResponse;
    message: string;
}

export interface IPasienTeradmisiHariIniModel {
    id_register: number,
    no_antrian: string,
    tgl_admisi: Date,
    jam_masuk: Date,
    no_rekam_medis: string,
    no_register: string,
    nama_pasien: string,
    gender: string,
    umur: string,
    statusrm: string,
    nama_poli: string,
    nama_debitur: string
}

export class GetAllPasienTeradmisiHariIni implements HttpResponseModel {
    responseResult: boolean;
    data: IPasienTeradmisiHariIniModel[];
    message: string;
}