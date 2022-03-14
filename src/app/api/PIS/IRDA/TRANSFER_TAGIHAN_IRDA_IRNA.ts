import { environment } from "src/environments/environment";

export const POST_LOOKUP_PASIEN_IRDA = `${environment.webApiAdmisi}` + "AdmisiIrda/TransferIRDAtoIRNALookupPasienIrda";
export const GET_ADMISI_PASIEN_IRNA = `${environment.webApiAdmisi}` + "AdmisiIrda/TransferIRDAtoIRNALookupPasienIrna/";
export const POST_TRANSFER_TAGIHAN_IRDA = `${environment.webApiAdmisi}` + "AdmisiIrda/TransferIRDAtoIRNA";
export const POST_HISTORY_TRANSFER_TAGIHAN_IRDA = `${environment.webApiAdmisi}` + "AdmisiIrda/TransferIRDAtoIRNAHistory";
