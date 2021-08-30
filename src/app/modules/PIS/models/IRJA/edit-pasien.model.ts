import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @IDetailPersonModel base model untuk request Put Update Detail Person
*/
export interface IDetailPersonModel {
    id_person: number;
    id_jenis_identitas: number;
    no_identitas: string;
    no_kartu_keluarga?: string;
    nama_depan: string;
    nama_belakang?: string;
    nama_panggilan?: string;
    gelar_depan?: string;
    gelar_belakang?: string;
    gender: string;
    path_foto?: string;
    nama_foto?: string;
    gol_darah?: string;
    tempat_lahir?: string;
    tanggal_lahir: Date;
    tinggi_badan_cm?: number;
    berat_badan_kg?: number;
    id_marital_status?: number;
    id_agama?: number;
    id_kebangsaan?: number;
    id_etnis?: number;
    id_bahasa?: number;
    id_last_education?: number;
    id_job_type?: number;
}

/**
 * @IAlamatPersonModel base model untuk request Put Update Alamat Person
*/
export interface IAlamatPersonModel {
    id_alamat_person?: number;
    id_person: number;
    alamat_lengkap: string;
    kode_pos?: string;
    rt?: string;
    rw?: string;
    kelurahan?: string;
    kode_wilayah: string;
    is_default: boolean;
}

/**
 * @IKontakPersonModel base model untuk request Put Update Kontak Person
*/
export interface IKontakPersonModel {
    id_alamat_person: number;
    id_person: number;
    hand_phone?: string;
    home_phone?: string;
    office_phone?: string;
    email?: string;
    keterangan?: string;
    is_default: boolean;
}

/**
 * @IDebiturPasienModel base model untuk request Put Update Kontak Person
*/
export interface IDebiturPasienModel {
    id_alamat_person: number;
    id_person: number;
    id_debitur?: number;
    no_member: string;
    tgl_aktif_member?: Date;
    tgl_expired_member?: Date;
    keterangan: string;
    is_default: boolean;
}

/**
 * @PutUpdateDetailPerson response model setelah request Put Update Detail Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PutUpdateDetailPerson implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateAlamatPerson response model setelah request Put Update Alamat Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PutUpdateAlamatPerson implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateKontakPerson response model setelah request Put Update Kontak Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PutUpdateKontakPerson implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateDebiturPasien response model setelah request Put Update Debitur Pasien
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PutUpdateDebiturPasien implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PostInsertAlamatPerson response model setelah request Post Insert Alamat Person
 * @Key : { responseResult: boolean; data: number; message: string }
*/
export class PostInsertAlamatPerson implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostInsertKontakPerson response model setelah request Post Insert Kontak Person
 * @Key : { responseResult: boolean; data: number; message: string }
*/
export class PostInsertKontakPerson implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostInsertDebiturPerson response model setelah request Post Insert Debitur Person
 * @Key : { responseResult: boolean; data: number; message: string }
*/
export class PostInsertDebiturPerson implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostDeleteDebiturPerson response model setelah request Post Delete Debitur Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PostDeleteDebiturPerson implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}