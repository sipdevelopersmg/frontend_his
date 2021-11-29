import { environment } from "src/environments/environment";

export const POST_GET_ALL_DAFTAR_POSTING = `${environment.webApiBilling}` + `tarif/TransBilling/BillGetDaftarInvPaidForPosting_IRNA_IRDA/`;

export const POST_SAVE_POSTING_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/BillPostingIRDA`;
export const POST_BATAL_POSTING_BILLING_IRDA = `${environment.webApiBilling}` + `tarif/TransBillingIRDA/BillBatalPostingIRDA`;