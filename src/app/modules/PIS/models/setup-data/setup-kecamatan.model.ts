import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @KecamatanModel base model Kecamatan
 * @Key : { kode_wilayah: string, kode_wilayah_parent: string, kode_tipe_wilayah: string, nama_wilayah: string }
*/
export interface KecamatanModel {
    kode_wilayah?: string;
    kode_wilayah_parent?: string;
    kode_tipe_wilayah: string;
    nama_wilayah: string;
}

/**
 * @GetAllKecamatanModel response model setelah request Get All Kecamatan
 * @Key : { responseResult: boolean, data: KecamatanModel[], message: string }
 */
export class GetAllKecamatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: KecamatanModel[];
    message: string;
}

/**
 * @GetByIdKecamatanModel response model setelah request Get By Id Kecamatan
 * @Key : { responseResult: boolean, data: kode_wilayah, message: string }
 */
export class GetByIdKecamatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PostSaveKecamatanModel response model setelah request Post Save Kecamatan
 * @Key : { responseResult: boolean, data: kode_wilayah (string), message: string }
 */
export class PostSaveKecamatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateKecamatanModel response model setelah request Put Update Kecamatan
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateKecamatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteKecamatanModel response model setelah request Delete Kecamatan
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteKecamatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
