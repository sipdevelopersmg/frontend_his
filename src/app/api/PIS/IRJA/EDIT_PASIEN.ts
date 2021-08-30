import { environment } from "src/environments/environment";

// ** Edit Data - Data Person
export const PUT_UPDATE_DETAIL_PERSON = `${environment.webApiPis}` + "Person/UpdatePerson";
export const PUT_UPDATE_ALAMAT_PERSON = `${environment.webApiPis}` + "Person/UpdateAlamatPerson";
export const PUT_UPDATE_KONTAK_PERSON = `${environment.webApiPis}` + "Person/UpdateKontakPerson";
export const PUT_UPDATE_DEBITUR_PASIEN = `${environment.webApiPis}` + "Person/UpdateDebiturPasien";

// ** Edit Status Active Data - Data Person
export const PUT_UPDATE_STATUS_ACTIVE_ALAMAT_PERSON = `${environment.webApiPis}` + "Person/UpdateAlamatPersonStatusActive";
export const PUT_UPDATE_STATUS_ACTIVE_KONTAK_PERSON = `${environment.webApiPis}` + "Person/UpdateKontakPersonStatusActive";
export const PUT_UPDATE_STATUS_ACTIVE_DEBITUR_PASIEN = `${environment.webApiPis}` + "Person/UpdateDebiturPasienStatusActive";

// ** Insert Data - Data Person
export const POST_INSERT_ALAMAT_PERSON = `${environment.webApiPis}` + "Person/InsertAlamatPerson";
export const POST_INSERT_KONTAK_PERSON = `${environment.webApiPis}` + "Person/InsertKontakPerson";
export const POST_INSERT_DEBITUR_PASIEN = `${environment.webApiPis}` + "Person/InsertDebiturPasien";
export const POST_DELETE_DEBITUR_PASIEN = `${environment.webApiPis}` + "Person/DeleteDebiturPasien";

