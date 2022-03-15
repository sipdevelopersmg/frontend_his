import { environment } from "src/environments/environment";

export const POST_LOOKUP_PASIEN_IRJA = `${environment.webApiAdmisi}` + "Admisi/TransferIRJAtoIRNALookupPasienIrja";
export const GET_ADMISI_PASIEN_IRNA = `${environment.webApiAdmisi}` + "Admisi/TransferIRJAtoIRNALookupPasienIrna/";
export const POST_TRANSFER_TAGIHAN_IRJA = `${environment.webApiAdmisi}` + "Admisi/TransferIRJAtoIRNA";
export const POST_HISTORY_TRANSFER_TAGIHAN_IRJA = `${environment.webApiAdmisi}` + "Admisi/TransferIRJAtoIRNAHistory";
