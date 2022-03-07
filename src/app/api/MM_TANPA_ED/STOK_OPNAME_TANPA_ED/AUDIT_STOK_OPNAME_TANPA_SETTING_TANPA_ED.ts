import { environment } from "src/environments/environment";

export const GET_BY_ID = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetById';
export const GET_ALL_SETTING_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllSettingStokOpnameByParams';
export const GET_ALL_STOKROOM_BY_SETTING_STOK_OPNAME_ID = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllStockroomBySettingStokOpnameId';
export const GET_ALL_RAK_BY_STOKROOM_AND_SETTING_STOK_OPNAME = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllRakByIdStockroomAndSettingStokOpnameId';
export const GET_LOCKUP_BARANG_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetLookupBarangByStockroomAndWaktuCapture'
export const GET_ALL_BARANG_BY_ID_RAK_ADN_STOKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllBarangByIdRakAndStockroomAndWaktuCapture';
export const GET_ALL_BARANG_BATCH_BY_ID_ITEM_AND_STOCKROOM_AND_WAKTU_CAPTURE = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetLookupBarangByStockroomAndWaktuCapture';
export const GET_ALL_STOK_OPNAME_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllStokOpnameByParams';
export const GET_ALL_STOK_OPNAME_OPEN_BY_PARAMS = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/GetAllStokOpnameOpenByParams';
export const INSERT = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/Insert';
export const FINALISASI = `${environment.webApiMM}` +'TransAuditStokOpnameTanpaSettingNoEd/Finalisasi';