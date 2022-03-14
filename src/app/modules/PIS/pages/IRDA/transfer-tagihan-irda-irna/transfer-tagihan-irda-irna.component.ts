import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import Swal from 'sweetalert2';
import Config from './json/transfer-tagihan-irda-irna.config.json';
import * as API from '../../../../../api/PIS/IRDA';
import { TransferTagihanIrdaIrnaService } from '../../../services/IRDA/transfer-tagihan-irda-irna/transfer-tagihan-irda-irna.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-transfer-tagihan-irda-irna',
    templateUrl: './transfer-tagihan-irda-irna.component.html',
    styleUrls: ['./transfer-tagihan-irda-irna.component.css']
})
export class TransferTagihanIrdaIrnaComponent implements OnInit {

    API_CONFIG = API;

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];

    @ViewChild("GridData") GridData: GridComponent;
    GridPageSettings = { pageSizes: true, pageSize: 20 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridWrapSettings: object = { wrapMode: 'Content' };
    GridToolbar: any[] = ["Search"];
    GridGroupSettings: object = { showDropArea: false, columns: ['nama_poli'] };

    SelectedData: any;

    Config = Config;

    @ViewChild('LookupPasienIRDA') LookupPasienIRDA: OrgInputLookUpComponent;
    LookupPasienIRDAUrl = this.API_CONFIG.IRDA.TRANSFER_TAGIHAN_IRDA_IRNA.POST_LOOKUP_PASIEN_IRDA;

    FormTransferTagihan: FormGroup;

    @ViewChild("GridDataDetailTransfer") GridDataDetailTransfer: GridComponent;
    GridDetailTransferDatasource: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private transferTagihanIrdaIrnaService: TransferTagihanIrdaIrnaService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Baru', Captions: 'Baru', Icons1: 'fa-plus fa-sm' }
        ];

        this.FilterColumnDatasource = [
            { text: 'Tgl. Transfer', value: 'tii.transfer_time' }
        ];

        this.onSetFormTransferTagihanAttributes();

        this.handlePencarianFilter([]);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Baru':
                const elem = document.getElementById('btnTransferTagihanIRDA') as HTMLElement;
                elem.click();
                break;
            default:
                break;
        }
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.transferTagihanIrdaIrnaService.onGetHistoryTransferTagihanRawatDarurat(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    onSetFormTransferTagihanAttributes(): void {
        this.FormTransferTagihan = this.formBuilder.group({
            id_register_irda: [0, []],
            id_register_irna: [0, []],
        });
    }

    handleOpenModalTransfer(): void {

    }

    handleCloseModalTransfer(): void {
        const btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
        btnCloseModal.click();
    }

    handleSelectedPasienIRDA(args: any): void {
        this.id_register_irda.setValue(args.data.id_register);

        const no_rekam_medis_irda = document.getElementById('no_rekam_medis_irda') as HTMLInputElement;
        no_rekam_medis_irda.value = args.data.no_rekam_medis;

        const nama_pasien_irda = document.getElementById('nama_pasien_irda') as HTMLInputElement;
        nama_pasien_irda.value = args.data.nama_pasien;

        const realDataIndex = args.realData.findIndex((item) => {
            return item.informasi_pasien_irda.id_person == args.data.id_person;
        });

        this.GridDetailTransferDatasource = args.realData[realDataIndex]['detail_transaksi'];

        this.GridDataDetailTransfer.refresh();

        this.onGetAdmisiPasienIRNA(args.data.no_rekam_medis);
    }

    onGetAdmisiPasienIRNA(no_rekam_medis: any): void {
        this.transferTagihanIrdaIrnaService.onGetAdmisiPasienRawatInap(no_rekam_medis)
            .subscribe((result) => {
                if (!result.responseResult) {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', 'Pasien Belum Admisi Rawat Inap');
                } else {
                    this.id_register_irna.setValue(result.data.id_register);

                    const no_register_irna = document.getElementById('no_register_irna') as HTMLInputElement;
                    no_register_irna.value = result.data.no_register;

                    const no_rekam_medis_irna = document.getElementById('no_rekam_medis_irna') as HTMLInputElement;
                    no_rekam_medis_irna.value = result.data.no_rekam_medis;

                    const nama_pasien_irna = document.getElementById('nama_pasien_irna') as HTMLInputElement;
                    nama_pasien_irna.value = result.data.nama_pasien;
                }
            });
    }

    onSubmitTransferTagihanIRDA(formTransferTagihan: any): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Diinput Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.transferTagihanIrdaIrnaService.onPostTransferTagihanRawatDarurat(formTransferTagihan)
                    .subscribe((result) => {
                        if (result.responseResult) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Transfer Tagihan Berhasil')
                                .then(() => {
                                    this.FormTransferTagihan.reset();
                                    this.id_register_irda.setValue(0);
                                    this.id_register_irna.setValue(0);

                                    setTimeout(() => {
                                        this.handleCloseModalTransfer();
                                        this.handlePencarianFilter([]);
                                    }, 1000);
                                })
                        }
                    })
            }
        });
    }

    get id_register_irda(): AbstractControl { return this.FormTransferTagihan.get('id_register_irda'); }
    get id_register_irna(): AbstractControl { return this.FormTransferTagihan.get('id_register_irna'); }
}
