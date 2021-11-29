import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/GetPasienForLookupBillingIRDA`;
export const GET_SCAN_BILLING_IRDA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/ScanRegisterIRDA/`;
export const GET_DATA_BILLING_IRDA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/GetDataBillingIRDA/`;
export const POST_SAVE_DRAF_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/SaveDraftIrda`;
export const POST_SAVE_PULANG_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/PulangIRDA`;
export const POST_BATAL_PULANG_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/BatalPulangIRDA`;
export const POST_SAVE_PELUNASAN_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/PelunasanIRDA`;
export const POST_BATAL_PELUNASAN_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/BatalPaymentIRDA`;
export const POST_SAVE_REPROSES_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/ReprosesIRDA`;
export const POST_SAVE_POSTING_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/BillPostingIRDA`;