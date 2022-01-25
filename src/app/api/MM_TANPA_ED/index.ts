
import {PENERIMAAN} from '../MM_TANPA_ED/PENERIMAAN_TANPA_ED'
import {MUTASI} from '../MM/MUTASI'
import {RETUR_TANPA_ED} from '../MM_TANPA_ED/RETUR_TANPA_ED'
import {PEMAKAIAN_INTERNAL} from '../MM/PEMAKAIAN_INTERNAL'
import {REPACK} from './REPACKING'
import {ASSEM} from './ASSEMBLY'
import {PEMUSNAHAN} from './PEMUSNAHAN'
import {STOK_OPNAME} from './STOK_OPNAME'

export const MM_TANPA_ED = Object.assign({}, 
    {
        "PENERIMAAN_TANPA_ED":PENERIMAAN,
        "MUTASI":MUTASI,
        "RETUR_TANPA_ED":RETUR_TANPA_ED,
        "PEMAKAIAN_INTERNAL":PEMAKAIAN_INTERNAL,
        "REPACK":REPACK,
        "ASSEM":ASSEM,
        "PEMUSNAHAN":PEMUSNAHAN,
        "STOK_OPNAME":STOK_OPNAME
    }
)