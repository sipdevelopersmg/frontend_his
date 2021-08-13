import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @ProvinsiModel base model Provinsi
 * @Key : { kode_wilayah: string, kode_wilayah_parent: string, kode_tipe_wilayah: string, nama_wilayah: string }
*/
export interface ProvinsiModel {
    kode_wilayah?: string;
    kode_wilayah_parent?: string;
    kode_tipe_wilayah: string;
    nama_wilayah: string;
}

/**
 * @GetAllProvinsiModel response model setelah request Get All Provinsi
 * @Key : { responseResult: boolean, data: ProvinsiModel[], message: string }
 */
export class GetAllProvinsiModel implements HttpResponseModel {
    responseResult: boolean;
    data: ProvinsiModel[];
    message: string;
}

/**
 * @GetByIdProvinsiModel response model setelah request Get By Id Provinsi
 * @Key : { responseResult: boolean, data: kode_wilayah, message: string }
 */
export class GetByIdProvinsiModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PostSaveProvinsiModel response model setelah request Post Save Provinsi
 * @Key : { responseResult: boolean, data: kode_wilayah (string), message: string }
 */
export class PostSaveProvinsiModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateProvinsiModel response model setelah request Put Update Provinsi
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateProvinsiModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteProvinsiModel response model setelah request Delete Provinsi
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteProvinsiModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
