import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

interface IPerson {
    id_person?: number;
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
    user_created: number
}

interface IAlamatPerson {
    alamat_lengkap: string;
    kode_pos?: string;
    rt?: string;
    rw?: string;
    kelurahan?: string;
    kode_wilayah: string;
    user_created: number
}

interface IKontakPerson {
    hand_phone?: string;
    home_phone?: string;
    office_phone?: string;
    email?: string;
    keterangan?: string;
    user_created: number
}

interface IDokter {
    id_spesialisasi_dokter: number;
    no_surat_ijin_praktek: string;
    tgl_exp_surat_ijin_praktek: Date;
    no_str: string;
    tgl_exp_str: Date;
    id_smf: number;
    id_status_dokter: number;
    is_active: boolean;
    user_created: number;
}

/**
 * @DokterModel base model Dokter
*/
export interface DokterModel {
    person: IPerson;
    alamat_person: IAlamatPerson[];
    kontak_person: IKontakPerson[];
    dokter: IDokter;
}

/**
 * @GetByIdDokterModel response model setelah request Get By Id Dokter
 * @Key : { responseResult: boolean; data: DokterModel; message: string }
*/
export class GetByIdDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: DokterModel;
    message: string;
}

/**
 * @PostSavePendaftaranDokterBaruModel response model setelah request Post Save Dokter Baru
 * @Key : { responseResult: boolean; data: id_dokter (number); message: string }
*/
export class PostSavePendaftaranDokterBaruModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostUploadFotoPersonModel response model setelah request Post Upload Foto Person
 * @Key : { responseResult: boolean; data: string; message: string }
 */
export class PostUploadFotoPersonDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @IPersonDokterSudahAdaModel response model untuk request Post Save Pendaftaran Dokter Person Sudah Ada
*/
export interface IPersonDokterSudahAdaModel {
    id_person: number;
    id_spesialisasi_dokter: number;
    no_surat_ijin_praktek: string;
    tgl_exp_surat_ijin_praktek: Date;
    no_str: string;
    tgl_exp_str: Date;
    id_smf: number;
    id_status_dokter: number;
    user_created: number;
}

/**
 * @PostSavePendaftaranDokterPersonSudahAdaModel response model setelah request Post Save Dokter Person Sudah Ada
 * @Key : { responseResult: boolean; data: string; message: string }
 */
export class PostSavePendaftaranDokterPersonSudahAdaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @IGetAllDokterModel response model setelah request Get All Dokter
 * @Key : { responseResult: boolean; data: IGetAllDokterModel[]; message: string }
*/
export interface IGetAllDokterModel {
    id_person: number;
    id_dokter: number;
    no_identitas: string;
    kode_dokter: string;
    full_name: string;
    gender: string;
    alamat_lengkap: string;
    hand_phone: string;
    spesialisasi_dokter: string;
}

/**
 * @GetAllDokterModel response model setelah request Get All Pasien IRJA
 * @Key : { responseResult: boolean; data: IGetAllDokterModel[]; message: string }
*/
export class GetAllDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetAllDokterModel[];
    message: string;
}