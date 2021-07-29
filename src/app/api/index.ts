import * as AUTH from './AUTH/AUTH';
import * as IRJA from './PIS/IRJA';
import * as IRNA from './PIS/IRNA';
import * as SETUP_DATA from './PIS/SETUP_DATA';

export const API = Object.assign({},
    IRJA,
    IRNA,
    AUTH,
    SETUP_DATA
)