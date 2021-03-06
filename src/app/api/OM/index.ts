import * as SETUP_DATA from './SETUP_DATA';
import * as VERIFIKASI_ORDER_LAB from './SETUP_DATA/VERIFIKASI_ORDER_LAB';
import * as VERIFIKASI_ORDER_RAD from './SETUP_DATA/VERIFIKASI_ORDER_RAD';
import * as HASIL_RADIOLOGI from './HASIL_RADIOLOGI/HASIL_RADIOLOGI';

export const API_ORDER_MANAGEMENT = Object.assign({},
    {
        SETUP_DATA: SETUP_DATA.SETUP_DATA,
        VERIFIKASI_ORDER_LAB: VERIFIKASI_ORDER_LAB,
        VERIFIKASI_ORDER_RAD: VERIFIKASI_ORDER_RAD,
        HASIL_RADIOLOGI: HASIL_RADIOLOGI,

    }
)
