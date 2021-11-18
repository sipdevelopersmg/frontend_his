import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IUpdatePasienRawatDaruratAnonimModel {
    id_register: number
    id_person: number
    no_rekam_medis: string
    id_debitur: number
}

export class PutUpdateDataPasienRawatDaruratAnonimModel implements HttpResponseModel {
    responseResult: boolean;
    data: IUpdatePasienRawatDaruratAnonimModel[];
    message: string;
}