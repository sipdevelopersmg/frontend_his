import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface GrupPenunjangModel {
    kode_grup_penunjang: string;
    nama_grup_penunjang: string;
}

export class GetAllGrupPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: GrupPenunjangModel[];
    message: string;
}

export class GetByIdGrupPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: GrupPenunjangModel;
    message: string;
}

export class PostSaveGrupPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class DeleteGrupPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class UpdateGrupPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}