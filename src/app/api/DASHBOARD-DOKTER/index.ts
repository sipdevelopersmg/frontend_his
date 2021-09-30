import { environment } from 'src/environments/environment';
import * as DAFTAR_PASIEN from './daftar_pasien_api';
import * as LABORATORIUM from './laboratorium_api';
import * as RADIOLOGI from './radiologi_api';
import * as KONSUL from './konsul_api';
import * as ALERGI from './alergi_api';
import * as VITAL_SIGN from './vital_sign_api';

const API_PERIKSA_PASIEN = `${environment.webApiPis}` + 'Pasien/PasienPeriksa/';

export const API_DASHBOARD_DOKTER = Object.assign({},
    {
        API_PERIKSA_PASIEN: API_PERIKSA_PASIEN,
        DAFTAR_PASIEN: DAFTAR_PASIEN,
        LABORATORIUM: LABORATORIUM,
        RADIOLOGI: RADIOLOGI,
        KONSUL: KONSUL,
        ALERGI: ALERGI,
        VITAL_SIGN: VITAL_SIGN,
    }
)
