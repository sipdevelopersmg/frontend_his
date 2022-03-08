import { environment } from "src/environments/environment";

export const GET_BARANG = `${environment.webApiPHARMACY}` +'SetupObat/GetBarangByParams';
export const GET_DETAIL = `${environment.webApiPHARMACY}` +'SetupObat/GetAllDetailByIdItem';
export const GET_PABRIK = `${environment.webApiPHARMACY}` +'SetupObat/GetLookupPabrikByParams';
export const GET_GRUP = `${environment.webApiPHARMACY}` +'SetupObat/GetLookupGrupObatByParams';
export const GET_CARA_PAKAI = `${environment.webApiPHARMACY}` +'SetupObat/GetLookupCaraPakaiObatByParams';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupObat/InsertHargaJual';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupObat/Update';