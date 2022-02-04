import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/GetLookupBarangByIdStockroom';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/GetAllDetailByByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/Validasi';
export const BATAL = `${environment.webApiMM}` +'TransPemusnahanStokNoEd/Batal';
