
import {PENERIMAAN} from '../MM_TANPA_ED/PENERIMAAN_TANPA_ED'
import {MUTASI_TANPA_ED} from '../MM_TANPA_ED/MUTASI_TANPA_ED'
import {RETUR_TANPA_ED} from '../MM_TANPA_ED/RETUR_TANPA_ED'
import {PEMAKAIAN_INTERNAL_TANPA_ED} from '../MM_TANPA_ED/PEMAKAIAN_INTERNAL_TANPA_ED'
import {REPACK_TANPA_ED} from './REPACKING_TANPA_ED'
import {ASSEM_TANPA_ED} from './ASSEMBLY_TANPA_ED'
import {PEMUSNAHANTANPAED} from './PEMUSNAHAN_TANPA_ED'
import {STOK_OPNAME_TANPA_ED} from './STOK_OPNAME_TANPA_ED'

export const MM_TANPA_ED = Object.assign({}, 
    {
        "PENERIMAAN_TANPA_ED":PENERIMAAN,
        "MUTASI_TANPA_ED":MUTASI_TANPA_ED,
        "RETUR_TANPA_ED":RETUR_TANPA_ED,
        "PEMAKAIAN_INTERNAL_TANPA_ED":PEMAKAIAN_INTERNAL_TANPA_ED,
        "REPACK_TANPA_ED":REPACK_TANPA_ED,
        "ASSEM_TANPA_ED":ASSEM_TANPA_ED,
        "PEMUSNAHANTANPAED":PEMUSNAHANTANPAED,
        "STOK_OPNAME_TANPA_ED":STOK_OPNAME_TANPA_ED
    }
)