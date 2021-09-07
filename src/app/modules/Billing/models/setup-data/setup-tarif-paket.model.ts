import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @TarifPaketModel base model Tarif Paket
*/
export interface TarifPaketModel {
    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int32 */
    id_grup_tarif?: number;

    /** @format int32 */
    id_kelompok_tarif?: number;
    kode_setup_tarif?: string | null;
    nama_setup_tarif?: string | null;
    jenis_rawat?: string | null;
    is_irja?: boolean;
    is_irna?: boolean;
    is_irda?: boolean;
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
 * @GetAllTarifPaketParentModel response model setelah request Get All  Tarif
 * @Key : { responseResult: boolean, data: TarifPaketModel[], message: string }
*/
export class GetAllTarifPaketParentModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPaketModel[];
    message: string;
}

export interface TarifPaketChildrenModel {
    id_setup_tarif_parent?: number;
    id_setup_tarif_child?: number;
    kode_setup_tarif?: string;
    nama_setup_tarif?: string;
}

/**
 * @GetAllChildByIdParentModel response model setelah request Get By Id  Tarif
 * @Key : { responseResult: boolean, data: TarifPaketModel[], message: string }
*/
export class GetAllChildByIdParentModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPaketChildrenModel[];
    message: string;
}

/**
 * @PostInsertTarifPaketModel response model setelah request Post Insert Tarif Paket
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertTarifPaketModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PostDeleteTarifPaketModel response model setelah request Post Delete Tarif Paket
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PostDeleteTarifPaketModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusTarifPaketModel response model setelah request Put Update Status Tarif Paket
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusTarifPaketModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}