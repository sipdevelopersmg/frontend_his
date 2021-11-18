import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IPasienTeradmisiHariIniModel } from 'src/app/modules/PIS/models/IRJA/admisi-pasien-rawat-jalan.model';
import { AdmisiPasienRawatDaruratService } from 'src/app/modules/PIS/services/IRDA/admisi-pasien-rawat-darurat/admisi-pasien-rawat-darurat.service';
import { AdmisiPasienRawatJalanService } from 'src/app/modules/PIS/services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import { AdmisiPasienRawatInapService } from 'src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-list-pasien-rawat-darurat',
    templateUrl: './list-pasien-rawat-darurat.component.html',
    styleUrls: ['./list-pasien-rawat-darurat.component.css']
})
export class ListPasienRawatDaruratComponent implements OnInit {

    FilterColumnDatasource: any[] = [
        { text: 'No. Register', value: 'tp.no_register' },
        { text: 'Nama Pasien', value: "concat(per.nama_depan, ' ',per.nama_belakang)" },
        { text: 'No. Rekam Medis', value: 'tp.no_rekam_medis' },
        { text: 'Nama Poli', value: 'p.nama_poli' },
        { text: 'Nama Debitur', value: 'sd.nama_debitur' },
        { text: 'No. Room', value: 'sr.room_no' },
        { text: 'No. Bed', value: 'sbr.bed_no' },
    ];

    GridData: MolGridComponent = null;
    GridPageSettings = { pageSizes: false, pageSize: 12 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridWrapSettings: object = { wrapMode: 'Content' };
    GridToolbar: any[] = ["Search"];
    GridGroupSettings: object = { showDropArea: false, columns: ['nama_poli'] };

    SelectedData: IPasienTeradmisiHariIniModel;

    FormPembatalanAdmisi: FormGroup;

    modalRef: BsModalRef;
    @ViewChild('modalPembatalanAdmisi') modalPembatalanAdmisi: TemplateRef<any>;

    @Output('onGetDaftarAdmisi') onGetDaftarAdmisi = new EventEmitter<any>();

    @Output('onGetSelectedRecords') onGetSelectedRecords = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService,
        private admisiRawatInapService: AdmisiPasienRawatInapService,
        private admisiRawatJalanService: AdmisiPasienRawatJalanService,
        private admisiRawatDaruratService: AdmisiPasienRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.handlePencarianFilter([]);

        this.FormPembatalanAdmisi = this.formBuilder.group({
            id_register: [0, []],
            reason_canceled: ["", []]
        });
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.admisiRawatDaruratService.onGetAllAdmisiPasienRawatDarurat(args)
            .subscribe(
                (result) => {
                    this.GridDatasource = result.data;
                }, (error) => {
                    console.log(error);
                }, () => {
                    this.onGetDaftarAdmisi.emit(this.GridDatasource);
                });
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;

        this.onGetSelectedRecords.emit(this.SelectedData);
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleToolbarClick(args: any): void {
        if (args.item.id === "cancel_admisi") {
            if (this.SelectedData) {
                this.handleOpenModalPembatalanAdmisi();
            } else {
                this.utilityService.onShowingCustomAlert('error', 'Oops', 'Data Admisi Belum Dipilih');
            }
        }
    }

    handleOpenModalPembatalanAdmisi(): void {
        this.onResetFormPembatalanAdmisi();

        this.id_register.setValue(this.SelectedData.id_register);

        this.modalRef = this.bsModalService.show(this.modalPembatalanAdmisi);
    }

    handleCloseModalPembatalanAdmisi(): void {
        this.modalRef.hide();
    }

    handleSubmitModalPembatalanAdmisi(FormPembatalanAdmisi: any): void {
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
                this.admisiRawatJalanService.onPostCancelAdmisiRawatJalan(FormPembatalanAdmisi.value.id_register, FormPembatalanAdmisi.value.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan Admisi ${this.SelectedData.nama_pasien} Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalanAdmisi();

                                    this.handlePencarianFilter([]);
                                })
                        }
                    });
            }
        });
    }

    onResetFormPembatalanAdmisi(): void {
        this.FormPembatalanAdmisi.reset();

        this.id_register.setValue(0);
        this.reason_canceled.setValue("");
    }

    get id_register(): AbstractControl { return this.FormPembatalanAdmisi.get('id_register'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanAdmisi.get('reason_canceled'); }

}
