import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @KelasPerawatanModel base model Kelas Perawatan
*/
export interface KelasPerawatanModel {
    /** @format int32 */
    id_kelas?: number;
    kode_kelas?: string | null;
    nama_kelas?: string | null;
    is_active?: boolean;
}

/**
 * @GetByIdKelasPerawatanModel response model setelah request Get By Id Kelas Perawatan
 * @Key : { responseResult: boolean, data: KelasPerawatanModel, message: string }
*/
export class GetByIdKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: KelasPerawatanModel;
    message: string;
}

/**
 * @GetAllKelasPerawatanModel response model setelah request Get All Kelas Perawatan
 * @Key : { responseResult: boolean, data: KelasPerawatanModel[], message: string }
*/
export class GetAllKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: KelasPerawatanModel[];
    message: string;
}

/**
 * @PostInsertKelasPerawatanModel response model setelah request Post Insert Kelas Perawatan
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateKelasPerawatanModel response model setelah request Put Update Kelas Perawatan
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusKelasPerawatanModel response model setelah request Put Update Status Kelas Perawatan
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteKelasPerawatanModel response model setelah request Delete Kelas Perawatan
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class DeleteKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}