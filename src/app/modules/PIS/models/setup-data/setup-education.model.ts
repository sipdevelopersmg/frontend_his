import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @EducationModel base model Education
 * @Key : { id_education: number, education: string, deskripsi: string }
*/
export interface EducationModel {
    id_education?: number;
    education: string;
    deskripsi: string;
}

/**
 * @GetAllEducationModel response model setelah request Get All Education
 * @Key : { responseResult: boolean, data: EducationModel[], message: string }
 */
export class GetAllEducationModel implements HttpResponseModel {
    responseResult: boolean;
    data: EducationModel[];
    message: string;
}

/**
 * @GetByIdEducationModel response model setelah request Get By Id Education
 * @Key : { responseResult: boolean, data: EducationModel, message: string }
 */
export class GetByIdEducationModel implements HttpResponseModel {
    responseResult: boolean;
    data: EducationModel;
    message: string;
}

/**
 * @PostSaveEducationModel response model setelah request Post Save Education
 * @Key : { responseResult: boolean, data: id_Education (number), message: string }
 */
export class PostSaveEducationModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateEducationModel response model setelah request Put Update Education
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateEducationModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteEducationModel response model setelah request Delete Education
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteEducationModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
