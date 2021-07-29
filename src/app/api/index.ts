import * as CORE from './CORE/CORE';
import * as AUTH from './AUTH/AUTH';
import * as IRJA from './PIS/IRJA';
import * as IRNA from './PIS/IRNA';
import * as SETUP_DATA from './PIS/SETUP_DATA';

export const API = Object.assign({},
    CORE,
    IRJA,
    IRNA,
    AUTH,
    SETUP_DATA
)
