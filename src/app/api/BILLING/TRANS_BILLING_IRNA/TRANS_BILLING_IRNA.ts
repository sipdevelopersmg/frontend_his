import { environment } from "src/environments/environment";

export const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/GetPasienForLookupBillingIRNA`;
export const GET_SCAN_BILLING_IRNA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/ScanRegisterIRNA/`;
export const GET_DATA_BILLING_IRNA_BY_NO_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/GetDataBillingIRNA/`;
export const POST_SAVE_DRAF_BILLING_IRNA = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/SaveDraftIrna`;
export const POST_PULANG_BILLING_IRNA = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/PulangIRNA`;
export const POST_BATAL_PULANG_BILLING_IRNA = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/BatalPulangIRNA`;
export const POST_SAVE_DEPOSIT = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/Deposit`;
export const GET_DEPOSIT_BY_ID_REGISTER = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/DepositGetByIdRegister/`;
export const POST_SAVE_RESTITUSI = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/Restitusi`;
export const POST_SAVE_PELUNASAN = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/PelunasanIRNA`;
export const POST_BATAL_PELUNASAN = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/BatalPaymentIRNA`;
export const POST_REPROSES = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/ReprosesIRNA`;
export const PUT_EKSTRAK_BED = `${environment.webApiBilling}` + `tarif/TransDetailAkomodasiInapEkstrak/EkstrakBed/`;
export const POST_SAVE_AKOMODASI_MANUAL = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/BillAddAkomodasiManual`;
export const PUT_DELETE_AKOMODASI_MANUAL = `${environment.webApiBilling}` + `tarif/TransBillingIRNA/BillDeleteAkomodasiManual`;