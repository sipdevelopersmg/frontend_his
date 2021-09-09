import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from './json/grid.json';

@Component({
    selector: 'app-admisi-pasien-rawat-jalan',
    templateUrl: './admisi-pasien-rawat-jalan.component.html',
    styleUrls: ['./admisi-pasien-rawat-jalan.component.css']
})
export class AdmisiPasienRawatJalanComponent implements OnInit {

    GridConfig = Config;

    ButtonNav: ButtonNavModel[];

    modalRef: BsModalRef;
    @ViewChild('modalPencarianPasien') modalPencarianPasien: TemplateRef<any>;

    FormPencarianPasien: FormGroup;

    GridLookupTarifDatasource: any[];
    GridLookupTarif: MolGridComponent = null;
    GridLookupTarifPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };
    GridLookupTarifSelectionSettings: object = { type: 'Multiple', enableSimpleMultiRowSelection: true }
    SelectedFilterLookupTarif: string;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
    ) { }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 114) {
            event.preventDefault();
            this.handleClickButtonNav('input_pasien_baru')
        }

        if (event.keyCode === 116) {
            event.preventDefault();
            this.handleClickButtonNav('pelayanan_pasien_irja');
        }
    }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "input_pasien_baru", Icons1: 'fa-user-plus', Captions: '[F3] Pasien Baru' },
            { Id: "pelayanan_pasien_irja", Icons1: 'fa-folder-plus', Captions: '[F5] Pelayanan Pasien' },
        ];

        this.FormPencarianPasien = this.formBuilder.group({
            no_identitas: ['', []],
            full_name: ['', []],
            tgl_lahir: ['', []],
            hand_phone: ['', []],
            alamat_lengkap: ['', []],
            kelurahan: ['', []],
        });
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'input_pasien_baru':
                this.hanldeOpenModalPencarianPasien();
                break;
            case 'pelayanan_pasien_irja':
                this.router.navigateByUrl('dashboard/PIS/IRJA/admisi-pasien-rawat-jalan');
                break;
            default:
                break;
        }

    }

    hanldeOpenModalPencarianPasien(): void {
        this.GridLookupTarifDatasource = [];

        this.modalRef = this.bsModalService.show(
            this.modalPencarianPasien,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    InitalizedGridLookupPencarianPasien(component: MolGridComponent): void {
        this.GridLookupTarif = component;
    }

    handleSelectedRowLookupPencarianPasien(args: any): void {

    }

    handleCariLookupPencarianPasien(FormPencarianPasien: any): void {
        console.log(FormPencarianPasien.value);
    }

    handleBaruLookupPencarianPasien(): void {
        this.handleCloseModalLookupPencarianPasien();

        setTimeout(() => {
            this.router.navigateByUrl('dashboard/PIS/pendaftaran-pasien-baru');
        }, 200);
    }

    handleCloseModalLookupPencarianPasien(): void {
        this.modalRef.hide();
    }

    get no_identitas(): AbstractControl { return this.FormPencarianPasien.get('no_identitas') };
    get full_name(): AbstractControl { return this.FormPencarianPasien.get('full_name') };
    get tgl_lahir(): AbstractControl { return this.FormPencarianPasien.get('tgl_lahir') };
    get hand_phone(): AbstractControl { return this.FormPencarianPasien.get('hand_phone') };
    get alamat_lengkap(): AbstractControl { return this.FormPencarianPasien.get('alamat_lengkap') };
    get kelurahan(): AbstractControl { return this.FormPencarianPasien.get('kelurahan') };
}
