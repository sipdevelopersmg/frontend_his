import * as SETUP_DATA from '../BILLING/SETUP_DATA';
import * as SETTING_HARGA_TARIF from '../BILLING/SETTING_HARGA_TARIF';
import * as TRANS_BILLING from './TRANS_BILLING/TRANS_BILLING';
import * as KASIR from './KASIR';

export const API_BILLING = Object.assign({}, {
    "SETUP_DATA": SETUP_DATA.API_SETUP_DATA,
    "SETTING_HARGA_TARIF": SETTING_HARGA_TARIF.API_SETTING_HARGA_TARIF,
    "TRANS_BILLING": TRANS_BILLING,
    "KASIR": KASIR
})