import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

export class SetupSupplierModel implements HttpResponseModel {
    statusCode: number;
    responseResult: boolean;
    data: ISetupSupplierModel[];
    message: string;
}

export interface ISetupSupplierModel {
    id_supplier: number;
    id_tipe_supplier: number;
    kode_supplier: string;
    nama_supplier: string;
    alamat_supplier: string;
    kode_wilayah: number;
    negara: string;
    telepon: string;
    fax: string;
    kode_pos: string;
    email: string;
    contact_person: string;
    id_tipe_item: number;
    npwp: string;
    default_hari_tempo_bayar: number;
    default_hari_pengiriman: number;
    default_prosentase_diskon: number;
    default_prosentase_tax: number;
    is_tax: boolean;
    is_active: boolean;
    user_created: number;
}

export interface ISetActiveSupplierModel {
    id_supplier : number;
    user_deactived : number;
}