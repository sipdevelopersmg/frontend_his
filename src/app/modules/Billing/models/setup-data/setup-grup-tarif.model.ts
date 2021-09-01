import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @GrupTarifModel base model Grup Tarif
*/
export interface GrupTarifModel {
    /** @format int32 */
    id_grup_tarif?: number;

    /** @format int32 */
    id_grup_tarif_parent?: number;
    kode_grup_tarif: string;
    nama_grup_tarif: string;

    /** @format int32 */
    level: number;
}

/**
 * @GrupTarifRecursiveModel base model Grup Tarif Recursive
*/
export interface GrupTarifRecursiveModel {
    /** @format int32 */
    id_grup_tarif?: number;
    kode_grup_tarif?: string | null;
    nama_grup_tarif?: string | null;

    /** @format int32 */
    level?: number;

    /** @format int32 */
    id_grup_tarif_parent?: number;
    kode_group_tarif_parent?: string | null;
    nama_grup_tarif_parent?: string | null;

    /** @format int32 */
    level_parent?: number;
    child?: GrupTarifRecursiveModel[] | null;
}

/**
 * @GetByIdGrupTarifModel response model setelah request Get By Id Grup Tarif
 * @Key : { responseResult: boolean, data: GrupTarifModel, message: string }
*/
export class GetByIdGrupTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: GrupTarifModel;
    message: string;
}

/**
 * @GetAllTarifModel response model setelah request Get All Grup Tarif
 * @Key : { responseResult: boolean, data: GrupTarifRecursiveModel[], message: string }
*/
export class GetAllGrupTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: GrupTarifRecursiveModel[];
    message: string;
}

/**
 * @PostInsertTarifModel response model setelah request Post Insert Grup Tarif
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertGrupTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateGrupTarifModel response model setelah request Put Update Grup Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateGrupTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteGrupTarifModel response model setelah request Delete Grup Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class DeleteGrupTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}