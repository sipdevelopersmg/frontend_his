import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface IBankDarahModel {
    id_register?: number;
    id_kelas?: number;
    kode_grup_penunjang?: string;
    id_icd?: number;
    id_poli_order?: number;
    id_dokter_order?: number;
    keterangan?: string;
    keterangan_sample?: string;
    is_order_darah?: boolean;
    master_order_darah?: IMasterOrderDarah;
    item_order_darah?: IItemOrderDarah[];
}

export interface IMasterOrderDarah {
    is_pernah_tranfusi?: boolean;
    is_hamil?: boolean;
    gol_darah?: string;
    tgl_diperlukan?: string;
    indikasi_transfusi?: string;
    catatan?: string;
}

export interface IItemOrderDarah {
    id_mapping_tarif_penunjang?: number;
    nama_tindakan_penunjang?: string;
    qty_order?: number;
    keterangan_order?: string;
}

export class PostSaveBankDarahModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}