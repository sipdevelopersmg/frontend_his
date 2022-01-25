import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupItem/GetAllByParams';   
export const GET_KARTU_STOCK_BY_ID_ITEM = `${environment.webApiMM}` +'KartuStokitem/GetAllByIdItemAndParams';   
export const GET_ED_ITEM = `${environment.webApiMM}` +'SetupStokItem/GetAllDetailBatchByIdItemAndIdStockroom';   
export const GET_ALL_BY_STOCKROOM = `${environment.webApiMM}` +'SetupItem/GetLookupBarangByIdWarehouseAndParams';   
export const GET_ALL = `${environment.webApiMM}` +'SetupItem/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupItem/GetMMSetupItemById';
export const INSERT = `${environment.webApiMM}` +'SetupItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupItem/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupItem/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupItem/UpdateToDeActive';

export const GET_SATUAN_BY_ITEM = `${environment.webApiMM}` +'SetupItemSatuan/GetByIdItem';
export const INSERT_SATUAN_BY_ITEM = `${environment.webApiMM}` +'SetupItemSatuan/Insert';
export const UPDATE_SATUAN_BY_ITEM = `${environment.webApiMM}` +'SetupItemSatuan/Update';
export const DELETE_SATUAN_BY_ITEM = `${environment.webApiMM}` +'SetupItemSatuan/Delete';

export const GET_URAI_BY_ITEM = `${environment.webApiMM}` +'SetupItem/GetItemUraiByHeaderId';
export const INSERT_URAI_BY_ITEM = `${environment.webApiMM}` +'SetupItem/InsertItemUrai';
export const DELETE_URAI_BY_ITEM = `${environment.webApiMM}` +'SetupItem/DeleteItemUrai';

export const GET_ASESEMBLY_BY_ITEM = `${environment.webApiMM}` +'SetupItem/GetItemAssemblyByHeaderId';
export const INSERT_ASESEMBLY_BY_ITEM = `${environment.webApiMM}` +'SetupItem/InsertItemAssembly';
export const DELETE_ASESEMBLY_BY_ITEM = `${environment.webApiMM}` +'SetupItem/DeleteItemAssembly';
