import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @IPasienGetAllModel response model setelah request Get All Pasien IRJA
 * @Key : { responseResult: boolean; data: BahasaModel[]; message: string }
*/
export interface IPasienIRJAGetAllModel {
    id_person: number;
    no_identitas: string;
    no_rekam_medis: string;
    full_name: string;
    gender: string;
    alamat_lengkap: string;
    hand_phone: string;
    keterangan: string;
}

/**
 * @GetAllPasienModel response model setelah request Get All Pasien IRJA
 * @Key : { responseResult: boolean; data: IPasienIRJAGetAllModel[]; message: string }
*/
export class GetAllPasienIRJAModel implements HttpResponseModel {
    responseResult: boolean;
    data: IPasienIRJAGetAllModel[];
    message: string;
}