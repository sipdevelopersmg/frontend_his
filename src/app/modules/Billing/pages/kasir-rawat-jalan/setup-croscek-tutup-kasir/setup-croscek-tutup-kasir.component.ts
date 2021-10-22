import { formatCurrency } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CommandModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SetupUserService } from 'src/app/modules/core/services/setup-user/setup-user.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ModalDetailCrossCheckComponent } from '../../../components/modal-detail-cross-check/modal-detail-cross-check.component';
import { ModalDetailPendapatanSistemComponent } from '../../../components/modal-detail-pendapatan-sistem/modal-detail-pendapatan-sistem.component';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';

@Component({
    selector: 'app-setup-croscek-tutup-kasir',
    templateUrl: './setup-croscek-tutup-kasir.component.html',
    styleUrls: ['./setup-croscek-tutup-kasir.component.css']
})
export class SetupCroscekTutupKasirComponent implements OnInit, OnDestroy {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[] = [
        { text: 'Pilih User Kasir', value: 'mu.user_name' },
        { text: 'Tgl. Tutup Kasir', value: "tsk.waktu_tutup_kasir::date" },
    ];

    FilterDropdownDatasource: any[] = [];
    FilterDropdownFields: any = {};

    @ViewChild('GridTransaksiTutupKasir') GridTransaksiTutupKasir: GridComponent;
    GridDatasource: any[] = [];
    GridToolbar: any[] = ["Search"];
    GridWrapSettings: object = { wrapMode: 'Header' };
    GridSelectedData: any = {};

    @ViewChild('GridPendapatanVersiSistem') GridPendapatanVersiSistem: GridComponent;
    GridPendapatanSistemDatasource: any[] = [];
    CommandLihatDetailVersiKomputer: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-info fa-sm' } }
    ];

    @ViewChild('GridPendapatanVersiKasir') GridPendapatanVersiKasir: GridComponent;
    GridPendapatanKasirDatasource: any[] = [];

    screenWidth: any;

    @ViewChild('DetailCrossCheck') DetailCrossCheck: ModalDetailCrossCheckComponent;

    @ViewChild('DetailPendapatanSistem') DetailPendapatanSistem: ModalDetailPendapatanSistemComponent;

    HeaderPendapatanVersiSistem: any = {};

    modalRef: BsModalRef;
    @ViewChild('modalValidasiCrossCheck') modalValidasiCrossCheck: TemplateRef<any>;

    FormValidasiCrossCheck: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService,
        private setupUserService: SetupUserService,
        private setupKasirIrjaService: SetupKasirIrjaService
    ) { }

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        this.ButtonNav = [
            { Id: 'Batalkan', Icons1: 'fa-ban fa-sm', Captions: 'Batalkan' },
            { Id: 'Validasi', Icons1: 'fa-check fa-sm', Captions: 'Validasi' },
        ];

        this.handlePencarianFilter([
            {
                columnName: "tsk.waktu_tutup_kasir::date",
                filter: "between",
                searchText: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                searchText2: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
            }
        ]);

        this.setupUserService.onGetAllUserKasir()
            .subscribe((result) => {
                this.FilterDropdownDatasource = result.data;

                this.FilterDropdownFields = { text: 'full_name', value: 'user_name' };
            });

        this.FormValidasiCrossCheck = this.formBuilder.group({
            id_saldo_kasir: [0, []],
            keterangan_validasi: [0, []],
        });
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Batalkan':
                this.onBatalkanTutupKasir(this.GridSelectedData.id_saldo_kasir);
                break;
            case 'Validasi':
                this.handleOpenModalValidasiCrossCheck();
                break;
            default:
                break;
        }
    }

    onBatalkanTutupKasir(id_saldo_kasir: number): void {
        this.setupKasirIrjaService.onPostCancelTutupKasir(id_saldo_kasir)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Tutup Kasir Berhasil Dibatalkan')
                        .then(() => {
                            this.handlePencarianFilter([
                                {
                                    columnName: "tsk.waktu_tutup_kasir::date",
                                    filter: "between",
                                    searchText: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                                    searchText2: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                                }
                            ]);
                        })
                }
            })
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.setupKasirIrjaService.onGetHistoryTutupKasir(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;

        this.HeaderPendapatanVersiSistem['id_saldo_kasir'] = this.GridSelectedData.id_saldo_kasir;
        this.HeaderPendapatanVersiSistem['user_kasir'] = this.GridSelectedData.user_name;
        this.HeaderPendapatanVersiSistem['nama_kasir'] = this.GridSelectedData.user_name;
        this.HeaderPendapatanVersiSistem['waktu_buka_kasir'] = this.utilityService.onFormatDate(this.GridSelectedData.waktu_buka_kasir, 'Do MMMM yyyy HH:mm:ss');
        this.HeaderPendapatanVersiSistem['waktu_tutup_kasir'] = this.utilityService.onFormatDate(this.GridSelectedData.waktu_tutup_kasir, 'Do MMMM yyyy HH:mm:ss');

        this.setupKasirIrjaService.HeaderPendapatanVersiSistem.next(this.HeaderPendapatanVersiSistem);

        this.onGetPendapatanKasir(this.GridSelectedData.id_saldo_kasir);
    }

    onGetPendapatanKasir(id_saldo_kasir: number): void {
        this.setupKasirIrjaService.onGetPendapatanVersiSistem(id_saldo_kasir)
            .subscribe((result) => {
                this.GridPendapatanSistemDatasource = result.data;
            });

        this.setupKasirIrjaService.onGetPendapatanVersiKasir(id_saldo_kasir)
            .subscribe((result) => {
                this.GridPendapatanKasirDatasource = result.data;
            });
    }

    handleCommandClickVersiSistem(args: any): void {
        let data = args.rowData;

        this.HeaderPendapatanVersiSistem['id_payment_method'] = data.id_payment_method;
        this.HeaderPendapatanVersiSistem['jenis_payment'] = data.payment_method;
        this.HeaderPendapatanVersiSistem['jumlah_pembayaran'] = formatCurrency(data.jumlah_bayar, 'EN', 'Rp. ');

        this.setupKasirIrjaService.HeaderPendapatanVersiSistem.next(this.HeaderPendapatanVersiSistem);

        this.DetailPendapatanSistem.handleOpenModal();
    }

    handleOpenModalValidasiCrossCheck(): void {
        this.handleResetFormValidasiCrossCheckTutupKasir();

        this.id_saldo_kasir.setValue(this.GridSelectedData.id_saldo_kasir);

        this.modalRef = this.bsModalService.show(this.modalValidasiCrossCheck);
    }

    handleSubmitValidasiCrossCheckTutupKasir(FormValidasiCrossCheck: any): void {
        this.setupKasirIrjaService.onPostValidasiCrossCheckTutupKasir(FormValidasiCrossCheck.id_saldo_kasir, FormValidasiCrossCheck.keterangan_validasi)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Cross Check Berhasil Divalidasi')
                        .then(() => {
                            this.handleCloseModalValidasiCrossCheck();

                            this.handlePencarianFilter([
                                {
                                    columnName: "tsk.waktu_tutup_kasir::date",
                                    filter: "between",
                                    searchText: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                                    searchText2: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                                }
                            ]);
                        });
                }
            })
    }

    handleCloseModalValidasiCrossCheck(): void {
        this.modalRef.hide();
    }

    handleResetFormValidasiCrossCheckTutupKasir(): void {
        this.FormValidasiCrossCheck.reset();
        this.id_saldo_kasir.setValue(0);
        this.keterangan_validasi.setValue("");
    }

    ngOnDestroy(): void {
        this.DetailPendapatanSistem.handleCloseModal();
    }

    get id_saldo_kasir(): AbstractControl { return this.FormValidasiCrossCheck.get('id_saldo_kasir'); }
    get keterangan_validasi(): AbstractControl { return this.FormValidasiCrossCheck.get('keterangan_validasi'); }
}
