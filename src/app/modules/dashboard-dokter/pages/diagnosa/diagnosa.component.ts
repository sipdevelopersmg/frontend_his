import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { IDiagnosaPasienModel } from '../../models/diagnosa-pasien.model';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import Config from './json/diagnosa.config.json';
import * as API_PIS_SETUP_DATA from '../../../../api/PIS/SETUP_DATA';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DiagnosaService } from '../../services/diagnosa/diagnosa.service';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-diagnosa',
    templateUrl: './diagnosa.component.html',
    styleUrls: ['./diagnosa.component.css']
})
export class DiagnosaComponent implements OnInit, AfterViewInit {

    ShowTitle: boolean = true;

    Config = Config;

    JenisRawat: string;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    // ** List Diagnosa Pasien
    DiagnosaPasien: IDiagnosaPasienModel[];

    // ** Detail Diagnosa
    DetailDiagnosaPasien: IDiagnosaPasienModel;

    // ** Form Add Diagnosa
    FormAddDiagnosa: FormGroup;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogAddDiagnosa') modalDialogAddDiagnosa: TemplateRef<any>;

    // ** Lookup Diagnosa
    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private diagnosPasienService: DiagnosaService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
        let UserData = JSON.parse(localStorage.getItem("UserData"));

        this.FormAddDiagnosa = this.formBuilder.group({
            tanggal_diagnosa: [new Date().toISOString(), []],
            is_diagnosa_primer: [false, []],
            id_register: [this.daftarPasienService.ActivePasien.value.id_register, []],
            id_dokter: [UserData.id_karyawan, []],
            keluhan: ['', []],
            id_icd: [0, [Validators.required]],
            soap_subjective: ['', [Validators.required]],
            soap_objective: ['', [Validators.required]],
            soap_assesment: ['', [Validators.required]],
            catatan: ['', []],
            soap_plan: ['', [Validators.required]]
        });

        this.onGetAllDiagnosa();

        this.dashboardDokterService.onSetJenisRawatForDashboardDokter();

        this.dashboardDokterService.JenisRawat$
            .subscribe((result) => {
                this.JenisRawat = result;
            });

        if ((this.router.url).includes('Dokter')) {
            this.ShowTitle = true;
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    onGetAllDiagnosa(): void {
        this.diagnosPasienService.handleGetAllDiagnosa()
            .subscribe((result) => {
                this.DiagnosaPasien = result.data;
            })
    }

    onClickItemListDiagnosa(item: IDiagnosaPasienModel) {
        this.DetailDiagnosaPasien = item;
    }

    onClickButtonAddDiagnosa(): void {
        this.modalRef = this.modalService.show(
            this.modalDialogAddDiagnosa,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.onResetFormAddDiagnosa();
    }

    onCloseModalAddDiagnosa(): void {
        this.modalRef.hide();
    }

    handleSelectedDiagnosa(args: any): void {
        this.id_icd.setValue(args.id_icd || args[0].id_icd);

        this.soap_assesment.setValue(args.nama_icd || args[0].nama_icd);
    }

    onSubmitFormAddDiagnosa(FormAddDiagnosa: any): void {
        this.diagnosPasienService.handlePostSaveDiagnosa(FormAddDiagnosa)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Diagnosa Pasien Berhasil Disimpan')
                        .then(() => {
                            this.onCloseModalAddDiagnosa();

                            this.onGetAllDiagnosa();
                        })
                }
            })
    }

    onResetFormAddDiagnosa(): void {
        this.tanggal_diagnosa.setValue(new Date().toISOString());
        this.is_diagnosa_primer.setValue(false);
        this.keluhan.setValue("");
        this.id_icd.setValue(0);
        this.soap_subjective.setValue("");
        this.soap_objective.setValue("");
        this.soap_assesment.setValue("");
        this.catatan.setValue("");
        this.soap_plan.setValue("");
    }

    get tanggal_diagnosa(): AbstractControl { return this.FormAddDiagnosa.get("tanggal_diagnosa"); }
    get is_diagnosa_primer(): AbstractControl { return this.FormAddDiagnosa.get("is_diagnosa_primer"); }
    get id_register(): AbstractControl { return this.FormAddDiagnosa.get("id_register"); }
    get id_dokter(): AbstractControl { return this.FormAddDiagnosa.get("id_dokter"); }
    get keluhan(): AbstractControl { return this.FormAddDiagnosa.get("keluhan"); }
    get id_icd(): AbstractControl { return this.FormAddDiagnosa.get("id_icd"); }
    get soap_subjective(): AbstractControl { return this.FormAddDiagnosa.get("soap_subjective"); }
    get soap_objective(): AbstractControl { return this.FormAddDiagnosa.get("soap_objective"); }
    get soap_assesment(): AbstractControl { return this.FormAddDiagnosa.get("soap_assesment"); }
    get catatan(): AbstractControl { return this.FormAddDiagnosa.get("catatan"); }
    get soap_plan(): AbstractControl { return this.FormAddDiagnosa.get("soap_plan"); }
}
