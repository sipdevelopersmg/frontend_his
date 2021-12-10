
export interface Payment {
    jumlah_payment: number
    keterangan: string
    pembayar: string
}

export interface PaymentDetail {
    id_payment_method: number
    id_payment_method_detail: number
    jumlah_bayar: number
    id_voucher: number
    id_bank_payment: number
    id_edc_payment: number
    trace_number: string
    jenis_kartu: string
    card_holder: string
    nomor_kartu: string
}

export interface Deposit {
    id_register: number
    jumlah_deposit: number
}

export interface IDepositBillingRawatInapModel {
    payment: Payment
    payment_detail: PaymentDetail[]
    deposit: Deposit
}