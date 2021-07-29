import * as CORE from './CORE/CORE';
import * as AUTH from './AUTH/AUTH';
import * as IRJA from './PIS/IRJA';
import * as IRNA from './PIS/IRNA';

export const API = Object.assign({},
    CORE,
    IRJA,
    IRNA,
    AUTH,
)