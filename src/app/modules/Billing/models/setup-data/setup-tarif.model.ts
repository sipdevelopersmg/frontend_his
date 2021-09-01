import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @TarifModel base model Tarif
*/
export interface TarifModel {
    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int32 */
    id_grup_tarif?: number;

    /** @format int32 */
    id_kelompok_tarif?: number;
    kode_setup_tarif?: string | null;
    nama_setup_tarif?: string | null;
    jenis_rawat?: string | null;
    is_paket?: boolean;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

/**
 * @GetByIdTarifModel response model setelah request Get By Id  Tarif
 * @Key : { responseResult: boolean, data: TarifModel, message: string }
*/
export class GetByIdTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifModel;
    message: string;
}

/**
 * @GetAllTarifModel response model setelah request Get All  Tarif
 * @Key : { responseResult: boolean, data: TarifModel[], message: string }
*/
export class GetAllTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifModel[];
    message: string;
}

/**
 * @PostInsertTarifModel response model setelah request Post Insert Tarif
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateTarifModel response model setelah request Put Update Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusTarifModel response model setelah request Put Update Status Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}