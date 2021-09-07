import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @PoliModel base model Poli
*/
export interface PoliModel {
    /** @format int32 */
    id_poli?: number;

    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan?: number;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli?: string | null;
    nama_poli?: string | null;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;

    /** @format int32 */
    jumlah_tarif_poli?: number;
}

/**
 * @PoliRecursiveModel base model Poli Recursive
*/
export interface PoliRecursiveModel {
    /** @format int32 */
    id_poli?: number;

    /** @format int32 */
    id_jenis_ruangan?: number;
    jenis_ruangan?: string | null;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli?: string | null;
    nama_poli?: string | null;

    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan_parent?: number;
    jenis_ruangan_parent?: string | null;

    /** @format int32 */
    id_outlet_parent?: number;
    jenis_rawat_parent?: string | null;
    kode_poli_parent?: string | null;
    nama_poli_parent?: string | null;
    child?: PoliRecursiveModel[] | null;
}

/**
 * @GetByIdPoliModel response model setelah request Get By Id Poli
 * @Key : { responseResult: boolean, data: PoliModel, message: string }
*/
export class GetByIdPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: PoliModel;
    message: string;
}

/**
 * @GetAllTarifModel response model setelah request Get All Poli
 * @Key : { responseResult: boolean, data: PoliRecursiveModel[], message: string }
*/
export class GetAllPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: PoliRecursiveModel[];
    message: string;
}

/**
 * @PostInsertTarifModel response model setelah request Post Insert Poli
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdatePoliModel response model setelah request Put Update Poli
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdatePoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusPoliModel response model setelah request Put Update Status Poli
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeletePoliModel response model setelah request Delete Poli
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class DeletePoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @GetByIdJenisRuanganModel response model setelah request Get All Poli By Id Jenis Ruangan
 * @Key : { responseResult: boolean, data: PoliModel[], message: string }
*/
export class GetByIdJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: PoliModel[];
    message: string;
}