import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/GetPasienForLookupBillingIRNA`;
export const GET_SCAN_BILLING_IRNA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/ScanRegisterIRNA/`;
export const GET_DATA_BILLING_IRNA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/GetDataBillingIRNA/`;