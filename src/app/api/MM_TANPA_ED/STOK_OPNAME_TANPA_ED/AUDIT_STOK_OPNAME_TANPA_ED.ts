import { environment } from "src/environments/environment";

export const GET_BY_ID = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetById';
export const GET_ALL_SETTING_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllSettingStokOpnameByParams';
export const GET_ALL_STOKROOM_BY_SETTING_STOK_OPNAME_ID = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllStockroomBySettingStokOpnameId';
export const GET_ALL_RAK_BY_STOKROOM_AND_SETTING_STOK_OPNAME = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllRakByIdStockroomAndSettingStokOpnameId';
export const GET_ALL_BARANG_BY_ID_RAK_ADN_STOKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetBarangBySetting';
export const GET_ALL_BARANG_BATCH_BY_ID_ITEM_AND_STOCKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllBarangBatchByIdItemAndStockroomAndWaktuCapture';
export const GET_ALL_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllStokOpnameByParams';
export const GET_ALL_STOK_OPNAME_OPEN_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/GetAllStokOpnameOpenByParams';
export const INSERT = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/Insert';
export const FINALISASI = `${environment.webApiMM}` +'TransAuditStokOpnameNoEd/Finalisasi';