import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupPeresepanMaksimalModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupPeresepanMaksimalModel[];
    message: string;
}

export interface ISetupPeresepanMaksimalModel {
    id_peresepan_maksimal: number;
    peresepan_maksimal: string;
    nilai_maksimal: number;
    id_parameter_maksimal: number;
}

export interface ISetActiveSetupPeresepanMaksimalModel {
    id_peresepan_maksimal : number;
}