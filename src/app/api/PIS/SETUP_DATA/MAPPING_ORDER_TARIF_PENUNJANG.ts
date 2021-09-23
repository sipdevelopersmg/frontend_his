import { environment } from "src/environments/environment";

// ** Setup Mapping Tarif Penunjang 
export const GET_ALL_MAPPING_TARIF_PENUNJANG = `${environment.webApiPis}` + `OmMappingTarifPenunjang/GetAll`;
export const GET_BY_ID_MAPPING_TARIF_PENUNJANG = `${environment.webApiPis}` + `OmMappingTarifPenunjang/GetById/`;
export const POST_SAVE_MAPPING_TARIF_PENUNJANG = `${environment.webApiPis}` + `OmMappingTarifPenunjang/InsertMany`;
export const DELETE_MAPPING_TARIF_PENUNJANG = `${environment.webApiPis}` + `OmMappingTarifPenunjang/DeleteMany`;
export const PUT_UPDATE_MAPPING_TARIF_PENUNJANG = `${environment.webApiPis}` + `OmMappingTarifPenunjang/Update`;
export const LOOKUP_TARIF_MAPPING_ORDER_BY_KODE_KELOMPOK = `${environment.webApiPis}` + `OmMappingTarifPenunjang/TarifGetAllForLookupMappingPenunjangNotInKodeKelompok`;
export const GET_ALL_BY_KODE_KELOMPOK_AND_KELAS_PERAWATAN = `${environment.webApiPis}` + `OmMappingTarifPenunjang/GetAllByKodeKelompokAndKodeKelas`;