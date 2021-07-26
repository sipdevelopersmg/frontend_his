import { MenuJsonModel } from "../../core/models/navigation/menu.model";
import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export class AuthenticationResponseModel implements HttpResponseModel {
    data: IAuthenticationResponseModel;
    message: string;
    responseResult: boolean;
}

export interface IAuthenticationResponseModel {
    id_role: number;
    id_user: number;
    isAuth: boolean;
    user_name: string;
    nama_role: string;
    menuJson: MenuJsonModel;
    timeOut: number;
    token: string;
}

