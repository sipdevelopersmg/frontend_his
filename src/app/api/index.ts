import * as AUTH from './AUTH/AUTH';
import * as IRJA from './PIS/IRJA';
import * as IRNA from './PIS/IRNA';

export const API = Object.assign({},
    IRJA,
    IRNA,
    AUTH
)