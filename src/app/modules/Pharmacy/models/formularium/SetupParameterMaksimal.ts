import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupParameterMaksimalModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupParameterMaksimalModel[];
    message: string;
}

export interface ISetupParameterMaksimalModel {
    id_parameter_maksimal: number;
    parameter_maksimal: string;
}

export interface ISetActiveSetupParameterMaksimalModel {
    id_parameter_maksimal : number;
}