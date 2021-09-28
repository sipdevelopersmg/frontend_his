import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @PetugasModel base model Petugas
 * @Key : { id_Petugas: number, Petugas: string, deskripsi: string }
*/
export interface PetugasModel {
    id_petugas?: number;
    nama_petugas: string;
    kode_grup_penunjang: string;
}

/**
 * @GetAllPetugasModel response model setelah request Get All Petugas
 * @Key : { responseResult: boolean, data: PetugasModel[], message: string }
 */
export class GetAllPetugasModel implements HttpResponseModel {
    responseResult: boolean;
    data: PetugasModel[];
    message: string;
}

/**
 * @GetByIdPetugasModel response model setelah request Get By Id Petugas
 * @Key : { responseResult: boolean, data: PetugasModel, message: string }
 */
export class GetByIdPetugasModel implements HttpResponseModel {
    responseResult: boolean;
    data: PetugasModel;
    message: string;
}

/**
 * @PostSavePetugasModel response model setelah request Post Save Petugas
 * @Key : { responseResult: boolean, data: id_Petugas (number), message: string }
 */
export class PostSavePetugasModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdatePetugasModel response model setelah request Put Update Petugas
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdatePetugasModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeletePetugasModel response model setelah request Delete Petugas
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeletePetugasModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
