import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_PIS_SETUP_DATA from '../../../../api/PIS/SETUP_DATA';
import { PetugasModel } from '../../models/setup-data/setup-petugas.model';
import { SetupPetugasService } from '../../services/setup-data/setup-petugas/setup-petugas.service';
import { VerifikasiOrderRadService } from '../../services/verifikasi-order-rad/verifikasi-order-rad.service';
import Swal from 'sweetalert2';
import Config from './json/verifikasi-order-rad.config.json';

@Component({
    selector: 'app-verifikasi-order-rad',
    templateUrl: './verifikasi-order-rad.component.html',
    styleUrls: ['./verifikasi-order-rad.component.css']
})
export class VerifikasiOrderRadComponent implements OnInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA;

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[] = [
        { text: 'Pilih Jenis Rawat', value: "jenis_rawat" },
        { text: 'No. Order', value: "otop.nomor_order_penunjang" },
        { text: 'Tgl. Order', value: 'otop.tanggal_order_penunjang' },
        { text: 'Nama Pasien', value: "concat(p.nama_depan, ' ',p.nama_belakang)" },
        { text: 'No. Register', value: 'tp.no_register' },
        { text: 'No. Rekam Medis', value: 'tp.no_rekam_medis' },
    ];

    JenisRawatDatasource: any[] = [
        { text: 'Rawat Jalan', value: 'J' },
        { text: 'Rawat Inap', value: 'I' },
        { text: 'Rawat Darurat', value: 'D' },
    ];

    JenisRawatFields = { text: 'text', value: 'value' };

    CurrentFilter: any;

    GridDatasource: any[] = [];
    @ViewChild('GridData') public GridData: GridComponent;
    GridToolbar: any[] = ["Search"];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridPageSettings = { pageSizes: false, pageSize: 12 };
    GridSelectedRow: any;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogVerifikasiOrderLab') modalDialogVerifikasiOrderLab: TemplateRef<any>;

    FormVerifikasiDetailOrderRad: FormGroup;

    ShowDataPasien: boolean = true;

    PetugasDatasource: PetugasModel[] = [];
    PetugasFields: object = { text: 'nama_petugas', value: 'id_petugas' }

    // ** Grid Detail Order
    @ViewChild('GridDataDetail') GridDataDetail: GridComponent;
    GridDetailOrderDatasource: any[] = [];
    GridDetailOrderSelectedRecords: any;
    GridDetailOrderSelectedRowIndex: any;
    GridDetailOrderContextMenuItems: MenuItemModel[] = [];

    @ViewChild('LookupDokter') LookupDokter: OrgInputLookUpKodeComponent;
    UrlLookupDokter = this.API_PIS_SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;
    LookupDokterState = "One";
    SelectedLookupDokterData: any;

    // ** Grid Detail BHAP
    @ViewChild('GridDataBHAP') GridDataBHAP: GridComponent;
    GridBHAPDatasource: any[] = [];
    GridBHAPToolbar: any[] = [];

    // ** Grid Detail BHAP
    @ViewChild('GridDataBHAPHistory') GridDataBHAPHistory: GridComponent;
    GridBHAPHistoryDatasource: any[] = [];
    GridBHAPHistoryToolbar: any[] = [];

    // ** Grid Detail BHAP
    @ViewChild('GridDataDiagnosa') GridDataDiagnosa: GridComponent;
    GridDiagnosaDatasource: any[] = [];

    FormPembatalanOrder: FormGroup;

    modalCancelOrderRef: BsModalRef;
    @ViewChild('modalPembatalanOrderRad') modalPembatalanOrderRad: TemplateRef<any>;

    DisabledButtonBatalOrder: boolean = false;
    DisabledButtonVerifikasiOrder: boolean = false;

    GridWrapSettings = { wrapMode: 'Header' };

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupPetugasService: SetupPetugasService,
        private verifikasiOrderRadService: VerifikasiOrderRadService
    ) { }

    ngOnInit(): void {
        this.onSetFormVerifikasiOrderLab();

        this.handlePencarianFilter([]);

        this.onGetPetugasLab();
    }

    onSetFormVerifikasiOrderLab(): void {
        this.FormVerifikasiDetailOrderRad = this.formBuilder.group({
            "id_order_penunjang": [0, []],
            "id_register": [0, []],
            "nomor_order_penunjang": ["", []],
            "no_register": ["", []],
            "no_rekam_medis": ["", []],
            "nama_pasien": ["", []],
            "tanggal_lahir": ["", []],
            "umur": ["", []],
            "id_poli": ["", []],
            "id_kelas": ["", []],
            "nama_kelas": ["", []],
            "nama_debitur": ["", []],
            "alamat_lengkap": ["", []],
            "jam_periksa": ["", []],
            "kode_icd": ["", []],
            "nama_icd": ["", []],
            "keterangan_diagnosa": ["", []],
            "keterangan": ["", []],
            "nama_dokter": ["", []],
            "no_sample": ["", []],
            "date_estimate": ["", []],
            "id_petugas": [0, []]
        });

        this.FormPembatalanOrder = this.formBuilder.group({
            id_order_penunjang: [0, []],
            reason_canceled: ["", []]
        });
    }

    onGetPetugasLab(): void {
        let parameter = [
            {
                "columnName": "osp.kode_grup_penunjang",
                "filter": "like",
                "searchText": "RAD",
                "searchText2": ""
            }
        ];

        this.setupPetugasService.onGetAllByDynamicFilter(parameter)
            .subscribe((result) => {
                this.PetugasDatasource = result.data;
            });
    }

    handleClickButtonNav(ButtonId: string): void {

    }

    handlePencarianFilter(args?: any): void {
        let indexJenisRawat = args.map((item) => { return item.columnName }).indexOf('jenis_rawat');

        let parameter = {};

        if (indexJenisRawat > -1) {
            let filters = args.filter((item) => { return item.columnName !== 'jenis_rawat' });

            parameter = {
                kode_grup_penunjang: "RAD",
                jenis_rawat: args[indexJenisRawat].searchText,
                filters: filters
            };
        } else {
            parameter = {
                kode_grup_penunjang: "RAD",
                jenis_rawat: "J",
                filters: args.length > 0 ? [...args] : []
            };
        };

        this.CurrentFilter = parameter;

        this.verifikasiOrderRadService.onGetListOrderForVerifikasi(parameter)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedRow = args.data;

        this.onFillFormVerifikasiDetailOrderRad(this.GridSelectedRow);
    }

    handleToolbarClick(args: any): void {

    }

    handleActionComplete(args: any): void {

    }

    onFillFormVerifikasiDetailOrderRad(Data: any): void {
        this.onOpenModalVerifikasiOrderLab();

        this.GridDetailOrderDatasource = [];

        this.GridDiagnosaDatasource = [];

        setTimeout(() => {
            this.verifikasiOrderRadService.onGetDetailOrderForVerifikasi(Data.id_order_penunjang)
                .subscribe((result) => {
                    this.id_order_penunjang.setValue(result.data.header.id_order_penunjang);

                    this.nomor_order_penunjang.setValue(result.data.header.nomor_order_penunjang);
                    this.id_register.setValue(result.data.header.id_register);
                    this.no_register.setValue(result.data.header.no_register);
                    this.no_rekam_medis.setValue(result.data.header.no_rekam_medis);
                    this.nama_pasien.setValue(result.data.header.nama_pasien);

                    let tgl_lahir = this.utilityService.onFormatDate(result.data.header.tanggal_lahir, 'Do MMMM yyyy');
                    this.tanggal_lahir.setValue(`${tgl_lahir} (${result.data.header.umur})`);

                    this.id_poli.setValue(result.data.header.id_poli);
                    this.id_kelas.setValue(result.data.header.id_kelas);
                    this.nama_debitur.setValue(`${result.data.header.nama_kelas} - ${result.data.header.nama_debitur}`);
                    this.alamat_lengkap.setValue(result.data.header.alamat_lengkap);

                    this.GridDetailOrderDatasource = result.data.details;

                    this.GridDiagnosaDatasource = result.data.diagnosa;

                    this.keterangan_diagnosa.setValue(result.data.diagnosa[0]['nama_icd']);

                    this.onCheckIsPostedAll(result.data.details);
                });
        }, 500);
    }

    onOpenModalVerifikasiOrderLab(): void {
        this.onResetFormVerifikasiOrderDetailRad();

        let btnVerifikasiOrder = document.getElementById('btnVerifikasiOrder') as HTMLElement;

        btnVerifikasiOrder.click();
    }

    handleButtonTogglingDataPasien(): void {
        let btnToggleIcon = document.getElementById('btnToggleIcon') as HTMLElement;

        if (btnToggleIcon.classList.contains('fa-window-minimize')) {
            btnToggleIcon.classList.remove('fa-window-minimize');
            btnToggleIcon.classList.add('fa-window-maximize');
        } else {
            btnToggleIcon.classList.add('fa-window-minimize');
            btnToggleIcon.classList.remove('fa-window-maximize');
        };

        this.ShowDataPasien = !this.ShowDataPasien;
    }

    onGetSelectedTabId(args: any): void {
        // console.log(args);
    }

    // ** ============ GRID DETAIL ORDER SECTION ===============
    handleSelectedRowGridDetailOrder(args: any): void {
        this.GridDetailOrderSelectedRecords = args.data;
        this.GridDetailOrderSelectedRowIndex = args.rowIndex;

        if (args.data.status === "posted") {
            this.GridDetailOrderContextMenuItems = [];
            this.GridDataDetail.contextMenuItems = null;
        } else {
            this.GridDetailOrderContextMenuItems = [
                {
                    id: 'drop_order',
                    text: 'Drop Order',
                    iconCss: 'fas fa-trash-alt'
                },
                {
                    id: 'restore_order',
                    text: 'Restore Order',
                    iconCss: 'fas fa-trash-restore'
                },
                {
                    id: 'dokter_dpjp',
                    text: 'Dokter DPJP',
                    iconCss: 'fas fa-user-md'
                },
                {
                    id: 'dokter_dpjp_semua',
                    text: 'Semua Dokter DPJP',
                    iconCss: 'fas fa-user-md'
                }
            ];

            this.GridDataDetail.contextMenuItems = this.GridDetailOrderContextMenuItems;
        }
    }

    handleToolbarClickGridDetailOrder(args: any): void {

    }

    handleActionCompleteGridDetailOrder(args: any): void {

    }

    handleSelectGridDetailOrderContextMenu(args: any): void {

        let selected_row_index = this.GridDetailOrderSelectedRowIndex;

        let id = args.item.id;

        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;

        switch (id) {
            case "drop_order":
                this.onChangeStatusOrder(selected_row_index, "canceled")
                break;
            case "restore_order":
                this.onChangeStatusOrder(selected_row_index, "open")
                break;
            case "dokter_dpjp":
                btnCloseModal.click();
                this.LookupDokterState = "One";
                this.LookupDokter.onOpenModal();
                break;
            case "dokter_dpjp_semua":
                btnCloseModal.click();
                this.LookupDokterState = "All";
                this.LookupDokter.onOpenModal();
                break;
            default:
                break;
        }
    }

    onChangeStatusOrder(Index: number, ChangeTo: string): void {
        this.GridDetailOrderDatasource[Index]['status'] = ChangeTo;

        this.GridDataDetail.refresh();

        this.onCheckIsRemovedAll();
    }

    onCheckIsRemovedAll(): void {
        let isRemovedAll = this.GridDetailOrderDatasource.find(item => item.status === 'open');

        if (isRemovedAll) {
            this.DisabledButtonBatalOrder = false;
            this.DisabledButtonVerifikasiOrder = false;
        } else {
            this.DisabledButtonBatalOrder = false;
            this.DisabledButtonVerifikasiOrder = true;
        }
    }

    onCheckIsPostedAll(Data: any): void {
        let isPostedAll = Data.find(item => item.status === 'posted');

        if (isPostedAll) {
            this.DisabledButtonBatalOrder = true;
            this.DisabledButtonVerifikasiOrder = true;
        } else {
            this.DisabledButtonBatalOrder = false;
            this.DisabledButtonVerifikasiOrder = false;
        }
    }

    onGetSelectedLookupDokter(args: any): void {
        this.SelectedLookupDokterData = args;
        setTimeout(() => {
            this.onHandlingDataLookupDokter(this.SelectedLookupDokterData);
        }, 1000);
    }

    onHandlingDataLookupDokter(args: any): void {
        let btnVerifikasiOrder = document.getElementById('btnVerifikasiOrder') as HTMLElement;
        btnVerifikasiOrder.click();

        this.GridDetailOrderDatasource = [];

        this.GridDiagnosaDatasource = [];

        setTimeout(() => {
            this.verifikasiOrderRadService.onGetDetailOrderForVerifikasi(this.GridSelectedRow.id_order_penunjang)
                .subscribe((result) => {
                    this.id_order_penunjang.setValue(result.data.header.id_order_penunjang);

                    this.nomor_order_penunjang.setValue(result.data.header.nomor_order_penunjang);
                    this.id_register.setValue(result.data.header.id_register);
                    this.no_register.setValue(result.data.header.no_register);
                    this.no_rekam_medis.setValue(result.data.header.no_rekam_medis);
                    this.nama_pasien.setValue(result.data.header.nama_pasien);

                    let tgl_lahir = this.utilityService.onFormatDate(result.data.header.tanggal_lahir, 'Do MMMM yyyy');
                    this.tanggal_lahir.setValue(`${tgl_lahir} (${result.data.header.umur})`);

                    this.id_poli.setValue(result.data.header.id_poli);
                    this.id_kelas.setValue(result.data.header.id_kelas);
                    this.nama_debitur.setValue(`${result.data.header.nama_kelas} - ${result.data.header.nama_debitur}`);
                    this.alamat_lengkap.setValue(result.data.header.alamat_lengkap);

                    this.GridDetailOrderDatasource = result.data.details;

                    this.GridDiagnosaDatasource = result.data.diagnosa;

                    switch (this.LookupDokterState) {
                        case "One":
                            this.GridDetailOrderDatasource[this.GridDetailOrderSelectedRowIndex]['id_dokter'] = args.id_dokter;
                            this.GridDetailOrderDatasource[this.GridDetailOrderSelectedRowIndex]['nama_dokter'] = args.full_name;

                            this.GridDataDetail.refresh();

                            break;
                        case "All":
                            this.GridDetailOrderDatasource.forEach((item) => {
                                item['id_dokter'] = args.id_dokter;
                                item['nama_dokter'] = args.full_name;
                            });

                            setTimeout(() => {
                                this.GridDataDetail.refresh();
                            }, 1500);

                            break;
                        default:
                            break;
                    };

                    this.keterangan_diagnosa.setValue(result.data.diagnosa[0]['nama_icd']);

                    this.onCheckIsPostedAll(result.data.details);
                });
        }, 500);
    }

    // ** ============ GRID DETAIL BHAP SECTION ===============
    handleSelectedRowGridBHAP(args: any): void {

    }

    handleToolbarClickGridBHAP(args: any): void {

    }

    handleActionCompleteGridBHAP(args: any): void {

    }

    // ** ============ GRID DETAIL BHAP HISTORY SECTION ===============
    handleSelectedRowGridBHAPHistory(args: any): void {

    }

    handleToolbarClickGridBHAPHistory(args: any): void {

    }

    handleActionCompleteGridBHAPHistory(args: any): void {

    }

    // ** ============ GRID DETAIL DIAGNOSA SECTION ===============
    handleSelectedRowGridDiagnosa(args: any): void {

    }

    handleActionCompleteGridDiagnosa(args: any): void {

    }

    onSubmitFormVerifikasiOrderRad(FormVerifikasiOrderRad: any): void {
        this.GridDetailOrderDatasource.forEach((item) => {
            item['id_petugas'] = FormVerifikasiOrderRad.id_petugas;
            item['qty'] = item['qty_order'];
            item['is_cancel'] = item['status'] == 'canceled' ? true : false;
        });

        setTimeout(() => {
            FormVerifikasiOrderRad.item_verifikasi = this.GridDetailOrderDatasource;

            this.verifikasiOrderRadService.onPostVerifikasiOrderRAD(FormVerifikasiOrderRad)
                .subscribe((result) => {
                    if (result) {
                        this.utilityService.onShowingCustomAlert('success', 'Success', 'Order Radiologi Berhasil Diverifikasi')
                            .then(() => {
                                this.onResetFormVerifikasiOrderDetailRad();

                                let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
                                btnCloseModal.click();

                                setTimeout(() => {
                                    this.verifikasiOrderRadService.onGetListOrderForVerifikasi(this.CurrentFilter)
                                        .subscribe((result) => {
                                            this.GridDatasource = result.data;
                                        });
                                }, 500);
                            })
                    }
                })
        }, 500);
    }

    onResetFormVerifikasiOrderDetailRad(): void {
        this.FormVerifikasiDetailOrderRad.reset();

        this.id_order_penunjang.setValue(0);
        this.nomor_order_penunjang.setValue("");
        this.id_register.setValue(0);
        this.no_register.setValue("");
        this.no_rekam_medis.setValue("");
        this.nama_pasien.setValue("");
        this.tanggal_lahir.setValue("");
        this.umur.setValue("");
        this.nama_kelas.setValue("");
        this.nama_debitur.setValue("");
        this.alamat_lengkap.setValue("");
        this.jam_periksa.setValue("");
        this.kode_icd.setValue("");
        this.nama_icd.setValue("");
        this.keterangan_diagnosa.setValue("");
        this.keterangan.setValue("");
        this.no_sample.setValue("");
        this.date_estimate.setValue(new Date());
        this.id_petugas.setValue(0);
    }

    onCancelFormVerifikasiOrderRad(FormVerifikasiDetailOrderRad: any): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Dibatalkan Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.verifikasiOrderRadService.onPostCancelOrderRAD(this.id_order_penunjang.value, FormVerifikasiDetailOrderRad.value.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan Order Radiologi Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalanOrderRad();

                                    let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
                                    btnCloseModal.click();

                                    setTimeout(() => {
                                        this.verifikasiOrderRadService.onGetListOrderForVerifikasi(this.CurrentFilter)
                                            .subscribe((result) => {
                                                this.GridDatasource = result.data;
                                            });
                                    }, 500);
                                })
                        }
                    });
            }
        });
    }

    handleOpenModalPembatalanOrderRad(): void {
        this.onResetFormPembatalanOrderRad();

        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
        btnCloseModal.click();

        setTimeout(() => {
            this.modalCancelOrderRef = this.bsModalService.show(this.modalPembatalanOrderRad);
        }, 500);
    }

    handleCloseModalPembatalanOrderRad(): void {
        this.modalCancelOrderRef.hide();

        setTimeout(() => {
            this.onFillFormVerifikasiDetailOrderRad(this.GridSelectedRow);
        }, 500);
    }

    onResetFormPembatalanOrderRad(): void {
        this.FormPembatalanOrder.reset();

        this.reason_canceled.setValue("");
    }

    get id_order_penunjang(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('id_order_penunjang'); }
    get nomor_order_penunjang(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nomor_order_penunjang'); }
    get id_register(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('id_register'); }
    get no_register(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('no_register'); }
    get no_rekam_medis(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('no_rekam_medis'); }
    get nama_pasien(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nama_pasien'); }
    get tanggal_lahir(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('tanggal_lahir'); }
    get umur(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('umur'); }
    get id_poli(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('id_poli'); }
    get id_kelas(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('id_kelas'); }
    get nama_kelas(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nama_kelas'); }
    get nama_debitur(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nama_debitur'); }
    get alamat_lengkap(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('alamat_lengkap'); }
    get jam_periksa(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('jam_periksa'); }
    get kode_icd(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('kode_icd'); }
    get nama_icd(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nama_icd'); }
    get keterangan_diagnosa(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('keterangan_diagnosa'); }
    get keterangan(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('keterangan'); }
    get nama_dokter(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('nama_dokter'); }
    get no_sample(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('no_sample'); }
    get date_estimate(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('date_estimate'); }
    get id_petugas(): AbstractControl { return this.FormVerifikasiDetailOrderRad.get('id_petugas'); }

    get reason_canceled(): AbstractControl { return this.FormPembatalanOrder.get('reason_canceled'); }
}
