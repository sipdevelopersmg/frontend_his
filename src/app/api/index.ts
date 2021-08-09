import * as CORE from './CORE/CORE';
import * as AUTH from './AUTH/AUTH';
import * as IRJA from './PIS/IRJA';
import * as IRNA from './PIS/IRNA';
import * as SETUP_DATA from './PIS/SETUP_DATA';
import * as API_MM from './MM';

export const API = Object.assign({},
    { CORE: CORE },
    { IRJA: IRJA },
    { IRNA: IRNA },
    { AUTH: AUTH },
    { SETUP_DATA: SETUP_DATA },
    { API_MM: API_MM }
)
