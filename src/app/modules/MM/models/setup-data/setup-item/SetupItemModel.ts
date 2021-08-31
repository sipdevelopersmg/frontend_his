import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

    export class SetupItemModel implements HttpResponseModel {
        statusCode: number;
        responseResult: boolean;
        data: ISetupItemModel[];
        message: string;
    }
    
    export interface ISetupItemModel {
        /** @format int32 */
        id_grup_item?: number | null;
    
        /** @format int32 */
        id_pabrik?: number | null;
    
        /** @format int32 */
        id_supplier?: number | null;
        kode_item?: string | null;
        barcode?: string | null;
        nama_item?: string | null;
        kode_satuan?: string | null;
    
        /** @format int32 */
        id_temperatur_item?: number | null;
    
        /** @format double */
        batas_maksimal_pesan?: number | null;
    
        /** @format double */
        batas_maksimal_pakai?: number | null;
    
        /** @format double */
        batas_maksimal_mutasi?: number | null;
    
        /** @format double */
        batas_maksimal_jual?: number | null;
    
        /** @format double */
        batas_stok_kritis?: number | null;
    
        /** @format double */
        prosentase_stok_kritis?: number | null;
    
        /** @format double */
        harga_beli_terakhir?: number | null;
    
        /** @format double */
        hpp_average?: number | null;
    
        /** @format double */
        prosentase_default_profit?: number | null;
        is_ppn?: boolean | null;
    
        /** @format int32 */
        user_created?: number | null;
    }
  
    export interface ISetupItemSatuan {
        /** @format int32 */
        id_item?: number | null;
        kode_satuan?: string | null;
    
        /** @format int32 */
        isi?: number | null;
        is_satuan_beli?: boolean | null;
    }
  
    export interface ISetupItemUpdate {
        /** @format int32 */
        id_item?: number | null;
    
        /** @format int32 */
        id_grup_item?: number | null;
    
        /** @format int32 */
        id_pabrik?: number | null;
    
        /** @format int32 */
        id_supplier?: number | null;
        kode_item?: string | null;
        barcode?: string | null;
        nama_item?: string | null;
        kode_satuan?: string | null;
    
        /** @format int32 */
        id_temperatur_item?: number | null;
    
        /** @format double */
        batas_maksimal_pesan?: number | null;
    
        /** @format double */
        batas_maksimal_pakai?: number | null;
    
        /** @format double */
        batas_maksimal_mutasi?: number | null;
    
        /** @format double */
        batas_maksimal_jual?: number | null;
    
        /** @format double */
        batas_stok_kritis?: number | null;
    
        /** @format double */
        prosentase_stok_kritis?: number | null;
    
        /** @format double */
        harga_beli_terakhir?: number | null;
    
        /** @format double */
        hpp_average?: number | null;
    
        /** @format double */
        prosentase_default_profit?: number | null;
        is_ppn?: boolean | null;
        is_active?: boolean | null;
    
        /** @format int32 */
        user_deactived?: number | null;
    }
  
    export interface ISetActiveItemModel {
        /** @format int32 */
        id_item?: number | null;

        /** @format int32 */
        user_deactived?: number | null;
    }
