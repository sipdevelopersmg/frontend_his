// ** ADMISI RAWAT JALAN
export const POST_ADMISI_RAWAT_JALAN = 'SetupAdmisiPasienIRJA/InsertUpdate'

// ** ANTRIAN RAWAT JALAN
export const GET_POLI_ANTRIAN_RAWAT_JALAN = "SetupAdmisiPasienIRJA/GetPoliByParams";
export const GET_ALL_ANTRIAN_RAWAT_JALAN = "SetupAdmisiPasienIRJA/GetAllDataAntrianIrjaByParams";
export const GET_ALL_ANTRIAN_FROM_PENDAFTARAN_ULANG = "TransPendaftaranOnline/getAllSudahDaftarUlang";

// ** PENDAFTARAN PASIEN BARU RAWAT JALAN
export const GET_ALL_SEX = "SetupPasien/GetAllSex";
export const GET_ALL_AGAMA = "SetupPasien/GetAllAgama";
export const GET_ALL_MARITAL_STATUS = "SetupPasien/GetAllMaritalStatus";
export const GET_ALL_PENDIDIKAN = "SetupPasien/GetAllPendidikan";
export const GET_ALL_PEKERJAAN = "SetupPasien/GetAllTipePekerjaan";
export const GET_ALL_GOL_DARAH = "SetupPasien/GetAllGolDarah";
export const GET_ALL_KETERBATASAN = "SetupPasien/GetAllKeterbatasanFisik";
export const GET_ALL_PROVINSI = "Daerah/GetAllProvinsi";
export const GET_ALL_KOTA_BY_PROVINSI = "Daerah/GetKotaByProvinsi";
export const GET_ALL_KECAMATAN_BY_KOTA = "Daerah/GetKecamatanByKota";
export const GET_ALL_KELURAHAN_BY_KECAMATAN = "Daerah/GetKelurahanByKecamatan";
export const GET_ALL_KARTU_IDENTITAS = "SetupPasien/GetAllKartuIdentitas";
export const GET_ALL_SUKU = "SetupPasien/GetAllSuku";
export const GET_ALL_KEBANGSAAN = "SetupPasien/GetAllBangsa";
export const GET_ALL_BAHASA = "SetupPasien/GetAllBahasa";

// ** PENDAFTARAN ULANG PASIEN 
export const GET_DATA_PASIEN_BY_NO_ANTRIAN = "TransPendaftaranOnline/getAllByNoTransaksi";
export const POST_KONFIRMASI_PENDAFTARAN_ULANG = "TransPendaftaranOnline/updateWaktuDaftarUlang";

