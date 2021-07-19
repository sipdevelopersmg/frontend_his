import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupPabrikModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupPabrikModel[];
    message: string;
}

export interface ISetupPabrikModel {
    id_pabrik: number;
    kode_pabrik: string;
    nama_pabrik: string;
    alamat_pabrik: string;
    kota: string;
    provinsi: string;
    negara: string;
    telepon: string;
    fax: string;
    kode_pos: string;
    email: string;
    contact_person: string;
    is_active: boolean;
}
