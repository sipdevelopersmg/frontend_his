import { environment } from "src/environments/environment";

export const GET_BY_ID = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetById';
export const GET_ALL_SETTING_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllSettingStokOpnameByParams';
export const GET_ALL_STOKROOM_BY_SETTING_STOK_OPNAME_ID = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllStockroomBySettingStokOpnameId';
export const GET_ALL_RAK_BY_STOKROOM_AND_SETTING_STOK_OPNAME = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllRakByIdStockroomAndSettingStokOpnameId';
export const GET_LOCKUP_BARANG_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetLookupBarangByStockroomAndWaktuCapture'
export const GET_ALL_BARANG_BY_ID_RAK_ADN_STOKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllBarangByIdRakAndStockroomAndWaktuCapture';
export const GET_ALL_BARANG_BATCH_BY_ID_ITEM_AND_STOCKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllBarangBatchByIdItemAndStockroomAndWaktuCapture';
export const GET_ALL_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllStokOpnameByParams';
export const GET_ALL_STOK_OPNAME_OPEN_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/GetAllStokOpnameOpenByParams';
export const INSERT = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/Insert';
export const FINALISASI = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSetting/Finalisasi';