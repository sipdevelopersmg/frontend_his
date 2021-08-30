import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

interface IPerson {
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
    user_created: number;
}

interface IAlamatPerson {
    alamat_lengkap: string;
    kode_pos?: string;
    rt?: string;
    rw?: string;
    kelurahan?: string;
    kode_wilayah: string;
    user_created: number;
}

interface IKontakPerson {
    hand_phone?: string;
    home_phone?: string;
    office_phone?: string;
    email?: string;
    keterangan?: string;
    user_created: number;
}

interface IDebiturPasien {
    id_debitur?: number;
    no_member: string;
    tgl_aktif_member?: Date;
    tgl_expired_member?: Date;
    keterangan: string;
}

interface IPasien {
    keterangan: string;
}

/**
 * @PersonModel base model Person
*/
export interface PersonModel {
    person: IPerson;
    alamat_person: IAlamatPerson[];
    kontak_person: IKontakPerson[];
    debitur_pasien: IDebiturPasien[];
    pasien: IPasien;
}

/**
 * @GetByIdPasienModel response model setelah request Get By Id Pasien
 * @Key : { responseResult: boolean; data: BahasaModel; message: string }
*/
export class GetByIdPasienModel implements HttpResponseModel {
    responseResult: boolean;
    data: PersonModel;
    message: string;
}

/**
 * @PostSavePendaftaranPasienBaruModel response model setelah request Post Save Pasien Baru
 * @Key : { responseResult: boolean; data: id_pasien (number); message: string }
 */
export class PostSavePendaftaranPasienBaruModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostUploadFotoPersonModel response model setelah request Post Upload Foto Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PostUploadFotoPersonModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @IPersonSudahAdaModel response model untuk request Post Save Pendaftaran Pasien Person Sudah Ada
 * @Key : { id_person: number; pasien: IPasien; debitur_pasien: IDebiturPasien[] }
*/
export interface IPersonSudahAdaModel {
    id_person: number;
    pasien: IPasien;
    debitur_pasien: IDebiturPasien[];
}

/**
 * @PostSavePendaftaranPasienPersonSudahAdaModel response model setelah request Post Save Pasien Person Sudah Ada
 * @Key : { responseResult: boolean; data: string; message: string }
 */
export class PostSavePendaftaranPasienPersonSudahAdaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @GetLinkFotoPersonModel response model setelah request Get Link Foto Person
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class GetLinkFotoPersonModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

