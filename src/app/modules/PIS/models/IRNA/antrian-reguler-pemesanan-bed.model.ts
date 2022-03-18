import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel"

export interface IAntrianRegulerPemesananBedModel {
    id_booking: number
    no_rekam_medis: string
    nama_pasien: string
    gender: string
    tgl_rencana_inap: string
    id_kelas: number
    nama_kelas: string
    id_debitur: number
    nama_debitur: string
    status_booking: string
}

export interface IPostSaveAntrianRegulerPemesananBedModel {
    no_rekam_medis: string
    id_kelas: number
    id_debitur: number
    tgl_rencana_inap: string
}

export class GetAllAntrianRegulerPemesananBedModel implements HttpResponseModel {
    responseResult: boolean
    message: string
    data: IAntrianRegulerPemesananBedModel[]
}

export class CheckAntrianIsTerjadwalModel implements HttpResponseModel {
    responseResult: boolean
    message: string
    data: {
        no_rekam_medis: string
        id_setup_bed_room: number
        bed_no: string
        id_setup_room: number
        room_no: string
        id_kelas: number
        nama_kelas: string
        id_debitur: number
        nama_debitur: string
        id_poli: number
        kode_poli: string
        nama_poli: string
        id_jenis_ruangan: number
        jenis_ruangan: string
    }
}