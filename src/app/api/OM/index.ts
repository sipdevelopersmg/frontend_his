import * as SETUP_DATA from './SETUP_DATA';
import * as VERIFIKASI_ORDER_LAB from './SETUP_DATA/VERIFIKASI_ORDER_LAB';
import * as VERIFIKASI_ORDER_RAD from './SETUP_DATA/VERIFIKASI_ORDER_RAD';

export const API_ORDER_MANAGEMENT = Object.assign({},
    {
        SETUP_DATA: SETUP_DATA.SETUP_DATA,
        VERIFIKASI_ORDER_LAB: VERIFIKASI_ORDER_LAB,
        VERIFIKASI_ORDER_RAD: VERIFIKASI_ORDER_RAD,
    }
)
