import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupJenisFormulariumModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupJenisFormulariumModel[];
    message: string;
}

export interface ISetupJenisFormulariumModel {
    id_jenis_formularium: number;
    jenis_formularium: string;
}

export interface ISetActiveSetupJenisFormulariumModel {
    id_jenis_formularium : number;
}