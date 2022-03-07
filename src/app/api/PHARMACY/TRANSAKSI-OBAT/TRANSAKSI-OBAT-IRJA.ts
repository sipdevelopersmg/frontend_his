import { environment } from "src/environments/environment";

export const INSERT = `${environment.webApiPHARMACY}` +'TransPenjualanObatIrja/InsertFromAntrian';
export const UPDATEPENYERAHAN = `${environment.webApiPHARMACY}` +'TransPenjualanObatIrja/UpdatePenyerahan';
export const GET_OBAT_FORMULARIUM = `${environment.webApiPHARMACY}` +'TransPenjualanObatIrja/GetSetupObatFormulariumLookupParams'
export const INSERT_FORMULARIUM = `${environment.webApiPHARMACY}` +'TransPenjualanObatIrja/InsertFromAntrianFormularium';