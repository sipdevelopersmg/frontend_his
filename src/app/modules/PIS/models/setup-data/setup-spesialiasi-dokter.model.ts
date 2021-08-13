import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @SpesialisasiDokterModel base model Spesialisasi Dokter
 * @Key : { id_spesialisasi_dokter: number, kode_spesialisasi_dokter: string, spesialisasi_dokter: string }
*/
export interface SpesialisasiDokterModel {
    id_spesialisasi_dokter?: number;
    kode_spesialisasi_dokter: string;
    spesialisasi_dokter: string;
}

/**
 * @GetAllSpesialisasiDokterModel response model setelah request Get All Spesialisasi Dokter
 * @Key : { responseResult: boolean, data: SpesialisasiDokterModel[], message: string }
 */
export class GetAllSpesialisasiDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: SpesialisasiDokterModel[];
    message: string;
}

/**
 * @GetByIdSpesialisasiDokterModel response model setelah request Get By Id Spesialisasi Dokter
 * @Key : { responseResult: boolean, data: SpesialisasiDokterModel, message: string }
 */
export class GetByIdSpesialisasiDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: SpesialisasiDokterModel;
    message: string;
}

/**
 * @PostSaveSpesialisasiDokterModel response model setelah request Post Save Spesialisasi Dokter
 * @Key : { responseResult: boolean, data: id_spesialisasi_dokter (number), message: string }
 */
export class PostSaveSpesialisasiDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateSpesialisasiDokterModel response model setelah request Put Spesialisasi Dokter
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateSpesialisasiDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteSpesialisasiDokterModel response model setelah request Delete Spesialisasi Dokter
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteSpesialisasiDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}