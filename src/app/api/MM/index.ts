
import {SETUP_DATA} from '../MM/SETUP_DATA'
import {PENERIMAAN} from '../MM/PENERIMAAN'
import {MUTASI} from '../MM/MUTASI'
import {RETUR} from '../MM/RETUR'
import {PEMAKAIAN_INTERNAL} from '../MM/PEMAKAIAN_INTERNAL'
import {REPACK} from './REPACKING'
import {ASSEM} from './ASSEMBLY'
import {PEMUSNAHAN} from './PEMUSNAHAN'
import {STOK_OPNAME} from './STOK_OPNAME'

export const MM = Object.assign({}, 
    {
        "SETUP_DATA":SETUP_DATA,
        "PENERIMAAN":PENERIMAAN,
        "MUTASI":MUTASI,
        "RETUR":RETUR,
        "PEMAKAIAN_INTERNAL":PEMAKAIAN_INTERNAL,
        "REPACK":REPACK,
        "ASSEM":ASSEM,
        "PEMUSNAHAN":PEMUSNAHAN,
        "STOK_OPNAME":STOK_OPNAME
    }
)