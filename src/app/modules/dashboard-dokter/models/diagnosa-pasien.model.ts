export interface DiagnosaPasienModel {
    diagnosa_id?: number;
    detail_diagnosa?: DetailDiagnosaPasienModel[];
    waktu_entry?: Date;
}

interface DetailDiagnosaPasienModel {
    kode_diagnosa?: string;
    nama_diagnosa?: string;
    keterangan?: string;
    user_entry?: string;
    waktu_entry?: Date;
}

export interface IDiagnosaPasienModel {
    id_diagnosa?: number;
    tanggal_diagnosa?: string;
    is_diagnosa_primer?: boolean;
    id_register?: number;
    id_dokter?: number;
    nama_dokter?: string;
    keluhan?: string;
    id_icd?: number;
    kode_icd?: string;
    nama_icd?: string;
    catatan?: string;
    soap_subjective?: string;
    soap_objective?: string;
    soap_assesment?: string;
    soap_plan?: string;
    user_inputed?: number;
    time_inputed?: string;
}

