import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @JobTypeModel base model job type
 * @Key : { id_etnis: number, etnis: string }
*/
export interface JobTypeModel {
    id_job_type?: number;
    job_type: string;
}

/**
 * @GetAllJobTypeModel response model setelah request Get All Job Type
 * @Key : { responseResult: boolean, data: JobTypeModel[], message: string }
 */
export class GetAllJobTypeModel implements HttpResponseModel {
    responseResult: boolean;
    data: JobTypeModel[];
    message: string;
}

/**
 * @GetByIdJobTypeModel response model setelah request Get By Id Job Type
 * @Key : { responseResult: boolean, data: JobTypeModel, message: string }
 */
export class GetByIdJobTypeModel implements HttpResponseModel {
    responseResult: boolean;
    data: JobTypeModel;
    message: string;
}

/**
 * @PostSaveJobTypeModel response model setelah request Post Save Job Type
 * @Key : { responseResult: boolean, data: id_job_type (number), message: string }
 */
export class PostSaveJobTypeModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateJobTypeModel response model setelah request Put Update Job Type
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateJobTypeModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteJobTypeModel response model setelah request Delete Job Type
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteJobTypeModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
