import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from './json/pemasukan-rawat-jalan.config.json';

@Component({
    selector: 'app-pemasukan-rawat-jalan',
    templateUrl: './pemasukan-rawat-jalan.component.html',
    styleUrls: ['./pemasukan-rawat-jalan.component.css']
})
export class PemasukanRawatJalanComponent implements OnInit {

    PemasukanConfig = Config;

    @ViewChild('LookupNoReg') LookupNoReg: OrgInputLookUpComponent;
    UrlLookupNoReg: string;

    GridDatasource: any[];
    GridData: MolGridComponent = null;
    GridDataToolbar: any[] = [
        { text: '[F1] Add', tooltipText: '[F1] Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        "Search"
    ];

    modalRef: BsModalRef;
    @ViewChild('modalPemasukanRawatJalan') modalPemasukanRawatJalan: TemplateRef<any>;

    FormPemasukanRawatJalan: FormGroup;
    FormPemasukanRawatJalanState = 'Insert';

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 112) {
            event.preventDefault();
            this.handleOpenModalPemasukanRawatJalan('Insert')
        }
    }

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPemasukanRawatJalanAttributes();
    }

    onSetFormPemasukanRawatJalanAttributes(): void {
        this.FormPemasukanRawatJalan = this.formBuilder.group({
            id_tarif_berlaku_poli: [0, [Validators.required]],
            id_setup_tarif: [0, [Validators.required]],
            kode_setup_tarif: ["", [Validators.required]],
            nama_setup_tarif: ["", [Validators.required]],
            qty: [0, [Validators.required]],
            anastesi_local: [false, [Validators.required]],
            id_dokter: [0, [Validators.required]],
            nama_dokter: ["", [Validators.required]],
            doct_fee: [0, [Validators.required]],
            medical_fee: [0, [Validators.required]],
            hos_fee: [0, [Validators.required]],
            com_fee: [0, [Validators.required]],
            anas_fee: [0, [Validators.required]],
            nominal_tarif: [0, [Validators.required]],
            total_tarif: [0, [Validators.required]],
        });
    }

    heandleSelectedLookupRM(args: any): void {
    }

    handleSelectedRow(args: any): void {
    }

    handleToolbarClick(args: any): void {
        switch (args.item.id) {
            case "add":
                this.handleOpenModalPemasukanRawatJalan('Insert');
                break;
            default:
                break;
        }
    }

    InitalizedGrid(component: MolGridComponent): void {
    }

    handleActionComplete(args: any): void {
    }

    handleOpenModalPemasukanRawatJalan(State: string): void {
        this.FormPemasukanRawatJalanState = State;

        this.modalRef = this.bsModalService.show(
            this.modalPemasukanRawatJalan,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.onResetFormPemasukanRawatJalan();
    }

    handleSimpanModalPemasukanRawatJalan(FormPemasukanRawatJalan: any): void {
        console.log(FormPemasukanRawatJalan);
    }

    handleCloseModalPemasukanRawatJalan(): void {
        this.modalRef.hide();
    }

    onResetFormPemasukanRawatJalan(): void {
        this.FormPemasukanRawatJalan.reset();

        this.id_tarif_berlaku_poli.setValue(0);
        this.id_setup_tarif.setValue(0);
        this.kode_setup_tarif.setValue("");
        this.nama_setup_tarif.setValue("");
        this.qty.setValue(0);
        this.anastesi_local.setValue(false);
        this.id_dokter.setValue(0);
        this.nama_dokter.setValue("");
        this.doct_fee.setValue(0);
        this.medical_fee.setValue(0);
        this.hos_fee.setValue(0);
        this.com_fee.setValue(0);
        this.anas_fee.setValue(0);
        this.nominal_tarif.setValue(0);
        this.total_tarif.setValue(0);
    }

    get id_tarif_berlaku_poli(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_tarif_berlaku_poli'); }
    get id_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_setup_tarif'); }
    get kode_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('kode_setup_tarif'); }
    get nama_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('nama_setup_tarif'); }
    get qty(): AbstractControl { return this.FormPemasukanRawatJalan.get('qty'); }
    get anastesi_local(): AbstractControl { return this.FormPemasukanRawatJalan.get('anastesi_local'); }
    get id_dokter(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_dokter'); }
    get nama_dokter(): AbstractControl { return this.FormPemasukanRawatJalan.get('nama_dokter'); }
    get doct_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('doct_fee'); }
    get medical_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('medical_fee'); }
    get hos_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('hos_fee'); }
    get com_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('com_fee'); }
    get anas_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('anas_fee'); }
    get nominal_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('nominal_tarif'); }
    get total_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('total_tarif'); }
}
