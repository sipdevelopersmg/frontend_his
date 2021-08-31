import * as CORE from './CORE';
import * as AUTH from './AUTH/AUTH';
import * as PIS from './PIS';
import * as MM from './PHARMACY';

export const API = Object.assign({},
    {
        API_AUTH: AUTH,
        API_CORE: CORE,
        PIS: PIS,
        MM: MM
    }
)
