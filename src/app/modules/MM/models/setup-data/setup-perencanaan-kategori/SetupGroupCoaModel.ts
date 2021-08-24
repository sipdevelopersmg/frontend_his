import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupPerencanaanKategoriModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupPerencanaanKategoriModel[];
    message: string;
}

export interface ISetupPerencanaanKategoriModel {
    kategori:string;
}
