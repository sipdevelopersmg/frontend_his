import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DiagnosaPasienModel } from '../../models/diagnosa-pasien.model';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'app-diagnosa',
    templateUrl: './diagnosa.component.html',
    styleUrls: ['./diagnosa.component.css']
})
export class DiagnosaComponent implements OnInit {

    // ** List Diagnosa Pasien
    DiagnosaPasien: DiagnosaPasienModel[];

    // ** Detail Diagnosa
    DetailDiagnosaPasien: any;

    // ** Form Add Diagnosa
    FormAddDiagnosa: FormGroup;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogAddDiagnosa') modalDialogAddDiagnosa: TemplateRef<any>;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.DiagnosaPasien = [
            {
                diagnosa_id: 1,
                waktu_entry: new Date("08/01/2021"),
                detail_diagnosa: [
                    {
                        kode_diagnosa: "024",
                        nama_diagnosa: "Other severe protein-calore",
                        keterangan: "-",
                        user_entry: "dr. Anastasia Nadia",
                        waktu_entry: new Date("01/08/2021")
                    }
                ]
            },
            {
                diagnosa_id: 2,
                waktu_entry: new Date("08/02/2021"),
                detail_diagnosa: [
                    {
                        kode_diagnosa: "025",
                        nama_diagnosa: "Salmonella typhii",
                        keterangan: "-",
                        user_entry: "dr. Anastasia Nadia",
                        waktu_entry: new Date("02/08/2021")
                    }
                ]
            }
        ];

        this.FormAddDiagnosa = this.formBuilder.group({
            subjective: ['', []],
            objective: ['', []],
            assesment: ['', []],
            catatan_assesment: ['', []],
            plan: ['', []]
        });

        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
    }

    onClickItemListDiagnosa(item: DiagnosaPasienModel) {
        this.DetailDiagnosaPasien = item.detail_diagnosa;
    }

    onClickButtonAddDiagnosa(): void {
        this.modalRef = this.modalService.show(
            this.modalDialogAddDiagnosa,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onSubmitFormAddDiagnosa(FormAddDiagnosa: any): void {
        console.log(FormAddDiagnosa);
    }
}
