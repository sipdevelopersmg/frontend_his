import { HttpResponseModel } from "../../../../modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @DiagnosaAwalModel base model Diagnosa Awal
*/
export interface DiagnosaAwalModel {
    id_icd?: number;
    kode_icd?: string;
    nama_icd?: string;
    no_dtd?: boolean;
    kastropik?: boolean;
    is_active?: boolean;
    is_from_cbg?: boolean;
}

/**
 * @GetAllDiagnosaAwalModel response model setelah request Get All Diagnosa Awal
 * @Key : { responseResult: boolean, data: AsalRujukanModel[], message: string }
 */
export class GetAllDiagnosaAwalModel implements HttpResponseModel {
    responseResult: boolean;
    data: DiagnosaAwalModel[];
    message: string;
}

/**
 * @GetByIdDiagnosaAwalModel response model setelah request Get By Id Diagnosa Awal
 * @Key : { responseResult: boolean, data: AsalRujukanModel, message: string }
 */
export class GetByIdDiagnosaAwalModel implements HttpResponseModel {
    responseResult: boolean;
    data: DiagnosaAwalModel;
    message: string;
}

/**
 * @PostSaveDiagnosaAwalModel response model setelah request Post Save Diagnosa Awal
 * @Key : { responseResult: boolean, data: id_asal_rujukan (number), message: string }
 */
export class PostSaveDiagnosaAwalModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateDiagnosaAwalModel response model setelah request Put Update Diagnosa Awal
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateDiagnosaAwalModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusDiagnosaAwalModel response model setelah request Put Update Status Diagnosa Awal
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateStatusDiagnosaAwalModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

