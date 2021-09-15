import { environment } from "src/environments/environment";

export const GET_DETAIL_BY_SUPPLIER = `${environment.webApiMM}` +'TransSetHargaOrder/GetDetailBerlakuByIdSupplierAndParams';
export const GET_ITEM_BY_SUPPLIER = `${environment.webApiMM}` +'TransSetHargaOrder/GetBarangForLookupInputHargaOrderByIdSupplierAndParams';
export const INSERT = `${environment.webApiMM}` +'TransSetHargaOrder/Insert';