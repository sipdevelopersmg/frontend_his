import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBilling/PersonPasienGetAllByDynamicFilter`;
export const GET_SCAN_BILLING_IRJA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBilling/ScanRegisterIRJA/`;
export const GET_DATA_BILLING_IRJA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBilling/GetDataBillingIrja/`;

export const GET_SALDO_KLAIM_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TrKlaimSaldo/GetByIdRegister/`;
export const POST_SAVE_SALDO_KLAIM = `${environment.webApiBilling}` + `tarif/TrKlaimSaldo/Insert`;

export const POST_SAVE_INVOICE_TANPA_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithoutPayment`;
export const POST_SAVE_INVOICE_DENGAN_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithPayment`;
export const GET_HISTORY_INVOICE_TANPA_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/GetHistoryInvoiceByIdRegister/`;
