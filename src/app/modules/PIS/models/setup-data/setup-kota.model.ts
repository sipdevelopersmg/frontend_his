import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @KotaModel base model Kota
 * @Key : { kode_wilayah: string, kode_wilayah_parent: string, kode_tipe_wilayah: string, nama_wilayah: string }
*/
export interface KotaModel {
    kode_wilayah?: string;
    kode_wilayah_parent?: string;
    kode_tipe_wilayah: string;
    nama_wilayah: string;
}

/**
 * @GetAllKotaModel response model setelah request Get All Kota
 * @Key : { responseResult: boolean, data: KotaModel[], message: string }
 */
export class GetAllKotaModel implements HttpResponseModel {
    responseResult: boolean;
    data: KotaModel[];
    message: string;
}

/**
 * @GetByIdKotaModel response model setelah request Get By Id Kota
 * @Key : { responseResult: boolean, data: kode_wilayah, message: string }
 */
export class GetByIdKotaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PostSaveKotaModel response model setelah request Post Save Kota
 * @Key : { responseResult: boolean, data: kode_wilayah (string), message: string }
 */
export class PostSaveKotaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateKotaModel response model setelah request Put Update Kota
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateKotaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteKotaModel response model setelah request Delete Kota
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteKotaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
