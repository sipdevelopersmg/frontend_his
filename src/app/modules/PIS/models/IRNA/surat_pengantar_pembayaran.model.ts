import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface ICaraPulangModel {
    id_cara_pulang: number;
    cara_pulang: string;
    kode_cara_pulang_inadrg: string;
}

export class GetAllCaraPulangModel implements HttpResponseModel {
    responseResult: boolean;
    data: ICaraPulangModel[];
    message: string;
}

export interface IKondisiPulangModel {
    id_kondisi_pulang: number;
    kondisi_pulang: string;
}

export class GetAllKondisiPulangModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKondisiPulangModel[];
    message: string;
}