import { TarifBerlakuModel } from "src/app/modules/Billing/models/setting-tarif/setting-tarif-berlaku.model";
import { PoliModel } from "src/app/modules/Billing/models/setup-data/setup-poli.model";
import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";
import { IDokter } from "../setup-data/setup-dokter.model";

export interface IGetAllPasienIrjaModel {
    id_register?: number;
    no_register?: string;
    no_rekam_medis?: string;
    tgl_admisi?: Date;
    tgl_masuk?: Date;
    nama_pasien?: string;
    gender?: string;
    umur?: string;
    id_kelas?: number;
    nama_kelas?: string;
    nama_debitur?: string;
    nama_dokter?: string;
}

/**
 * @GetAllPasienRawatJalanForLookupModel response model setelah request Get All Pasien IRJA
 * @Key : { responseResult: boolean; data: IGetAllPasienIrjaModel[]; message: string }
*/
export class GetAllPasienRawatJalanForLookupModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetAllPasienIrjaModel[];
    message: string;
}

/**
 * @GetAllPoliByIdRegisterModel response model setelah request Get All Poli By Id Register
 * @Key : { responseResult: boolean; data: PoliModel[]; message: string }
*/
export class GetAllPoliByIdRegisterModel implements HttpResponseModel {
    responseResult: boolean;
    data: PoliModel[]
    message: string;
}

/**
 * @GetAllDokterForLookupModel response model setelah request Get All Dokter
 * @Key : { responseResult: boolean; data: IDokter[]; message: string }
*/
export class GetAllDokterForLookupModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDokter[];
    message: string;
}

/**
 * @GetAllTarifBerlakuPoliForLookup response model setelah request Get All Tarif Berlaku Poli
 * @Key : { responseResult: boolean; data: IDokter[]; message: string }
*/
export class GetAllTarifBerlakuPoliForLookup implements HttpResponseModel {
    responseResult: boolean;
    data: TarifBerlakuModel[];
    message: string;
}

/**
 * @PostInsertTransaksiPemasukanRawatJalanModel response model setelah request Post Save Transaksi Rawat Jalan
 * @Key : { responseResult: boolean; data: string; message: string }
*/
export class PostInsertTransaksiPemasukanRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PostCancelTransaksiPemasukanRawatJalanModel response model setelah request Post Cancel Transaksi Rawat Jalan
 * @Key : { responseResult: boolean; data: IDokter[]; message: string }
*/
export class PostCancelTransaksiPemasukanRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IGetHistoryPemasukanRawatJalanModel {
    id_register?: number;
    id_transaksi?: string;
    waktu?: Date;
    kode_setup_tarif?: string;
    nama_setup_tarif?: string;
    nama_pasien?: string;
    qty?: number;
    dokter?: string;
    total?: number;
    status?: string;
}

export class GetAllHistoryTransaksiPemasukanRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetHistoryPemasukanRawatJalanModel[];
    message: string;
}