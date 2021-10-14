import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBilling/PersonPasienGetAllByDynamicFilter`;
export const GET_SCAN_BILLING_IRJA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBilling/ScanRegisterIRJA/`;
export const GET_DATA_BILLING_IRJA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBilling/GetDataBillingIrja/`;

export const GET_SALDO_KLAIM_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TrKlaimSaldo/GetByIdRegister/`;
export const POST_SAVE_SALDO_KLAIM = `${environment.webApiBilling}` + `tarif/TrKlaimSaldo/Insert`;

export const POST_SAVE_INVOICE_TANPA_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithoutPayment`;
export const POST_SAVE_PAYMENT_WITH_EXISTING_INVOICE = `${environment.webApiBilling}` + `tarif/TrInvoice/PaymentForExistingInvoice`;

export const POST_SAVE_INVOICE_DENGAN_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithPayment`;
export const GET_HISTORY_INVOICE_TANPA_PAYMENT = `${environment.webApiBilling}` + `tarif/TrInvoice/GetHistoryInvoiceByIdRegister/`;

export const GET_SALDO_DEPOSIT_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBilling/DepositGetByIdRegister/`;
export const POST_SAVE_DEPOSIT = `${environment.webApiBilling}` + `tarif/TransBilling/Deposit`;

export const POST_SAVE_RESTITUSI = `${environment.webApiBilling}` + `tarif/TransBilling/Restitusi`;

export const GET_HISTORY_INVOICE_PAID = `${environment.webApiBilling}` + `tarif/TransBilling/GetDataTransaksi_PAID/`;
