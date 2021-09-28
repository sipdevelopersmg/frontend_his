import * as DAFTAR_PASIEN from './daftar_pasien_api';
import * as LABORATORIUM from './laboratorium_api';
import * as RADIOLOGI from './radiologi_api';

export const API_DASHBOARD_DOKTER = Object.assign({},
    {
        DAFTAR_PASIEN: DAFTAR_PASIEN,
        LABORATORIUM: LABORATORIUM,
        RADIOLOGI: RADIOLOGI,
    }
)
