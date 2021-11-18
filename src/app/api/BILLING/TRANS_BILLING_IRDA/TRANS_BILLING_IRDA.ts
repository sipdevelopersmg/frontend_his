import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/GetPasienForLookupBillingIRDA`;
export const GET_SCAN_BILLING_IRDA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/ScanRegisterIRDA/`;
export const GET_DATA_BILLING_IRDA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/GetDataBillingIRDA/`;