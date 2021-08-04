export interface DiagnosaPasienModel {
    diagnosa_id: number;
    detail_diagnosa: DetailDiagnosaPasienModel[];
    waktu_entry: Date;
}

interface DetailDiagnosaPasienModel {
    kode_diagnosa: string;
    nama_diagnosa: string;
    keterangan: string;
    user_entry: string;
    waktu_entry: Date;
}