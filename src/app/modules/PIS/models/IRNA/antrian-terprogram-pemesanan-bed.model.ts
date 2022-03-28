import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel"

export interface IAntrianTerprogramPemesananBedModel {
    id_booking: number
    no_rekam_medis: string
    nama_pasien: string
    gender: string
    hand_phone: string
    tgl_rencana_inap: Date
    tgl_rencana_pulang: Date
    id_kelas: number
    nama_kelas: string
    id_debitur: number
    nama_debitur: string
    id_poli: number
    nama_poli: string
    id_setup_room: number
    room_no: string
    id_setup_bed_room: number
    bed_no: string
    status_booking: string
    id_setup_room_booked: number
    room_no_booked: string
    id_setup_bed_room_booked: number
    bed_no_booked: string
}

export interface IPostSaveAntrianTerprogramPemesananBedModel {
    no_rekam_medis: string
    id_kelas: number
    id_debitur: number
    tgl_rencana_inap: string
    tgl_rencana_pulang: string
    id_jenis_ruangan: number
    id_poli: number
    id_setup_room: number
    id_setup_bed_room: string
}

export class GetAllAntrianTerprogramPemesananBedModel implements HttpResponseModel {
    responseResult: boolean
    message: string
    data: IAntrianTerprogramPemesananBedModel[]
}

export interface IAntrianTerprogramPersonTerjadwalModel {
    id_booking: number
    id_rencana_pulang: number
    no_rekam_medis: string
    nama_pasien: string
    tgl_rencana_inap: string
    tgl_rencana_pulang: string
    id_kelas: number
    kode_kelas: string
    nama_kelas: string
    id_jenis_ruangan: number
    jenis_ruangan: string
    id_poli: number
    kode_poli: string
    nama_poli: string
    id_setup_room: number
    room_no: string
    id_setup_bed_room: number
    bed_no: string
}

export class GetPersonTerjadwalForApproveModel implements HttpResponseModel {
    responseResult: boolean
    message: string
    data: IAntrianTerprogramPersonTerjadwalModel
}