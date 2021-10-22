import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';
import { SetupBukaKasirIrjaComponent } from '../setup-buka-kasir-irja/setup-buka-kasir-irja.component';

@Component({
    selector: 'app-setup-tambah-modal-kasir-irja',
    templateUrl: './setup-tambah-modal-kasir-irja.component.html',
    styleUrls: ['./setup-tambah-modal-kasir-irja.component.css']
})
export class SetupTambahModalKasirIrjaComponent implements OnInit {

    FormTambahModalKasir: FormGroup;

    @ViewChild('GridDataTambahModal') GridDataTambahModal: GridComponent;
    GridTambahModalDatasource: any[] = [];

    @ViewChild('BukaKasirIrja') BukaKasirIrja: SetupBukaKasirIrjaComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public setupKasirRawatJalanService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.onSetFormTambahModalAttributes();
    }

    handleOpenModalTambahModal(): void {
        let btnModalTambahModal = document.getElementById('btnModalTambahModal') as HTMLElement;
        btnModalTambahModal.click();

        setTimeout(() => {
            this.setupKasirRawatJalanService.SelectedDataBukaKasir
                .subscribe((result) => {
                    this.user_kasir.setValue(result['user_kasir']);
                    this.user_name.setValue(result['user_name']);
                    this.jumlah_modal_awal.setValue(result['jumlah_modal_awal']);

                    this.setupKasirRawatJalanService.onGetHistoryTambahModalKasir(result['id_saldo_kasir'])
                        .subscribe((result) => {
                            this.GridTambahModalDatasource = result.data;

                            this.GridDataTambahModal.refresh();
                        });
                });
        }, 500);
    }

    handleCloseModalTambahModal(): void {
        let btnCloseModalTambahModal = document.getElementById('btnCloseModalTambahModal') as HTMLElement;
        btnCloseModalTambahModal.click();

        this.handleResetFormTambahModal();
    }

    onSetFormTambahModalAttributes(): void {
        this.FormTambahModalKasir = this.formBuilder.group({
            user_kasir: [0, []],
            user_name: ["", []],
            jumlah_modal_awal: [0, []],
            tambahan_modal: [0, []],
        });
    }

    handleSubmitModalTambahModal(FormTambahModalKasir: any): void {
        this.setupKasirRawatJalanService.onPostSaveTambahModalKasir(FormTambahModalKasir.user_kasir, FormTambahModalKasir.tambahan_modal)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Modal Kasir Berhasil Ditambahkan')
                        .then((result) => {
                            this.handleCloseModalTambahModal();

                            this.setupKasirRawatJalanService.onGetHistoryBukaKasirBySubject();
                        })
                }
            })
    }

    handleResetFormTambahModal(): void {
        this.FormTambahModalKasir.reset();
        this.user_kasir.setValue(0);
        this.tambahan_modal.setValue(0);
    }

    get user_kasir(): AbstractControl { return this.FormTambahModalKasir.get('user_kasir'); }
    get user_name(): AbstractControl { return this.FormTambahModalKasir.get('user_name'); }
    get jumlah_modal_awal(): AbstractControl { return this.FormTambahModalKasir.get('jumlah_modal_awal'); }
    get tambahan_modal(): AbstractControl { return this.FormTambahModalKasir.get('tambahan_modal'); }
}
