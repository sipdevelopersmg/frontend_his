import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAM   = `${environment.webApiMM}` +'SetupAuditRakStorage/GetAllRakByParams';
export const INSERT             = `${environment.webApiMM}` +'SetupAuditRakStorage/InsertRak';
export const UPDATE             = `${environment.webApiMM}` +'SetupAuditRakStorage/UpdateRak';
export const DELETE             = `${environment.webApiMM}` +'SetupAuditRakStorage/DeleteRak';


export const GET_ALL_ITEM_BELUM_RAK_BY_PARAM   = `${environment.webApiMM}` +'SetupAuditRakStorage/GetLookupAllBarangBelumRak';
export const GET_ALL_ITEM_BY_RAK_ID   = `${environment.webApiMM}` +'SetupAuditRakStorage/GetLookupAllBarangByIdRak';

export const UPDATE_RAK_BARANG      = `${environment.webApiMM}` +'SetupAuditRakStorage/UpdateRakBarang';
export const HAPUS_RAK_FROM_BARANG  = `${environment.webApiMM}` +'SetupAuditRakStorage/HapusRakFromBarang';