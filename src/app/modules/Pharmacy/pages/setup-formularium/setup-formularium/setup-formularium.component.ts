import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { threadId } from 'worker_threads';
import { SetupGenerikModel } from '../../../models/formularium/SetupGenerik';
import { SetupFormulariumService } from '../../../services/formularium/setup-formularium/setup-formularium.service';
import { SetupGenerikService } from '../../../services/formularium/setup-generik/setup-generik.service';
import { SetupJenisFormulariumService } from '../../../services/formularium/setup-jenis-formularium/setup-jenis-formularium.service';
import { SetupPeresepanMaksimalService } from '../../../services/formularium/setup-peresepan-maksimal/setup-peresepan-maksimal.service';
import { SetupRestriksiObatService } from '../../../services/formularium/setup-restriksi-obat/setup-restriksi-obat.service';
import { SetupSediaanObatService } from '../../../services/formularium/setup-sediaan-obat/setup-sediaan-obat.service';
import { SetupTerapiGenerikService } from '../../../services/formularium/setup-terapi-generik/setup-terapi-generik.service';
import { SetupTerapiService } from '../../../services/formularium/setup-terapi/setup-terapi.service';
import { SetupParameterMaksimalService } from '../../../services/formularium/setup-parameter-maksimal/setup-parameter-maksimal.service';
import * as gridSetting from '../json/GridSetting.json'
@Component({
    selector: 'app-setup-formularium',
    templateUrl: './setup-formularium.component.html',
    styleUrls: ['./setup-formularium.component.css']
})
export class SetupFormulariumComponent implements OnInit {
    MaritalGenerikDropdownField: object = { text: 'nama_generik', value: 'id_generik' };
    MaritalJenisFormulariumDropdownField: object = { text: 'jenis_formularium', value: 'id_jenis_formularium' };
    MaritalSediaanObatDropdownField: object = { text: 'sediaan_obat', value: 'id_sediaan_obat' };
    MaritalRestriksiObatDropdownField: object = { text: 'nama_restriksi', value: 'id_restriksi_obat' };
    MaritalPeresepanMaksimalDropdownField: object = { text: 'peresepan_maksimal', value: 'id_peresepan_maksimal' };
    MaritalParameterMaksimalDropdownField: object = { text: 'parameter_maksimal', value: 'id_parameter_maksimal' };

    public GridSetting = gridSetting

    public wrapSettings: TextWrapSettingsModel;

    public hideParentTarif: boolean = true;
    allowMultiSelection = false;
    public field: any;

    @ViewChild('modalTambahTerapi') modalTambahTerapi: TemplateRef<any>;
    @ViewChild('modalTambahTerapiGenerik') modalTambahTerapiGenerik: TemplateRef<any>;
    @ViewChild('modalTambahFormularium') modalTambahFormularium: TemplateRef<any>;
    @ViewChild('modalSetupGenerik') modalSetupGenerik: TemplateRef<any>;
    @ViewChild('modalSetupTerapi') modalSetupTerapi: TemplateRef<any>;
    @ViewChild('modalSetupSediaan') modalSetupSediaan: TemplateRef<any>;
    @ViewChild('modalSetupRestriksi') modalSetupRestriksi: TemplateRef<any>;
    @ViewChild('modalSetupPeresepanMaksimal') modalSetupPeresepanMaksimal: TemplateRef<any>;

    modalRef: BsModalRef;

    DataSourceGeneric = [];
    DataSourceSediaan = [];
    DataSourceRestreksi = [];
    DataSourceMax = [];
    DataSourceDagang = [];

    CurrentDataTerapi: any;
    CurrentDataTerapiGenerik: any;
    //Form Input 
    FormInputDataTerapi: FormGroup;
    FormInputDataTerapiGenerik: FormGroup;
    FormInputDataFormularium: FormGroup;
    FormInputDataGenerik: FormGroup;
    FormInputDataSediaan: FormGroup;
    FormInputDataRestriksi: FormGroup;
    FormInputDataPeresepanMaksimal: FormGroup;



    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public setupTerapiService: SetupTerapiService,
        public setupTerapiGenerikService: SetupTerapiGenerikService,
        public setupGenerikService: SetupGenerikService,
        public setupFormulariumService: SetupFormulariumService,
        public setupJenisFormulariumService: SetupJenisFormulariumService,
        public setupSediaanObatService: SetupSediaanObatService,
        public setupRestriksiObatService: SetupRestriksiObatService,
        public setupPeresepanMaksimalService: SetupPeresepanMaksimalService,
        public setupParameterMaksimalService: SetupParameterMaksimalService,

    ) { }

    ngOnInit(): void {
        this.wrapSettings = { wrapMode: 'Content' };

        this.FormInputDataTerapi = this.formBuilder.group({
            id_terapi: [0, []],
            id_terapi_parent: [null, []],
            parent_terapi: ['', []],
            no_terapi: ['', [Validators.required]],
            kode_terapi: ['', [Validators.required]],
            nama_terapi: ['', [Validators.required]],
            level_rekursif_terapi: [1, [Validators.required]],
        });

        this.FormInputDataTerapiGenerik = this.formBuilder.group({
            id_terapi: [0, []],
            no_terapi_generik: ['', [Validators.required]],
            id_generik: [0, []],
        });

        this.FormInputDataFormularium = this.formBuilder.group({
            id_formularium: [0, []],
            id_generik: [0, []],
            id_terapi: [0, []],
            id_jenis_formularium: [0, []],
            id_sediaan_obat: [0, []],
            id_restriksi_obat: [0, []],
            id_peresepan_maksimal: [0, []],
            keterangan: ['', []],
            tgl_berlaku: [null, []],
            tgl_berakhir: [null, []],
        });

        this.FormInputDataGenerik = this.formBuilder.group({
            id_generik: [0, []],
            no_generik: ['', [Validators.required]],
            nama_generik: ['', [Validators.required]],
            alias_generik: ['', []],
            is_active: [false, []]
        });

        this.FormInputDataSediaan = this.formBuilder.group({
            id_sediaan_obat: [0, []],
            sediaan_obat: ['', [Validators.required]],
        });

        this.FormInputDataRestriksi = this.formBuilder.group({
            nama_restriksi: ['', [Validators.required]],
        });

        this.FormInputDataPeresepanMaksimal = this.formBuilder.group({
            peresepan_maksimal: ['', [Validators.required]],
            nilai_maksimal: [0, []],
            id_parameter_maksimal: ['', [Validators.required]],
        });

        this.getAllTerapi();
        this.setupGenerikService.setDataSource();
        this.setupJenisFormulariumService.setDataSource();
        this.setupSediaanObatService.setDataSource();
        this.setupRestriksiObatService.setDataSource();
        this.setupPeresepanMaksimalService.setDataSource();
        this.setupParameterMaksimalService.setDataSource();
    }

    /* ====== METHOD TERAPI =========== */
    public nodeSelected(e: NodeSelectEventArgs) {
        console.log(e)
        this.CurrentDataTerapi = e.nodeData;
        this.setupTerapiGenerikService.setDataSource(this.CurrentDataTerapi.id);
        this.setupFormulariumService.setDataSource(0);
    };

    getAllTerapi() {
        this.setupTerapiService.onGetAll().subscribe((result) => {
            this.field = { dataSource: result.data, id: 'id_terapi', parentID: 'id_terapi_parent', text: 'nama_terapi', hasChildren: 'is_parent' }
        })
    }

    handleSimpanTerapi() {
        this.setupTerapiService.onPostSave(this.FormInputDataTerapi.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.FormInputDataTerapi.reset();
                    this.modalRef.hide();
                    this.getAllTerapi();
                });
        })
    }

    handleAddTerapi() {
        this.id_terapi_parent.setValue(null);
        this.parent_terapi.setValue('');
        this.level_rekursif_terapi.setValue(1);
        this.hideParentTarif = true;
        this.modalRef = this.modalService.show(
            this.modalTambahTerapi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSubTerapi() {
        this.id_terapi_parent.setValue(this.CurrentDataTerapi.id);
        this.parent_terapi.setValue(this.CurrentDataTerapi.text);
        this.level_rekursif_terapi.setValue(2);
        this.hideParentTarif = false;
        this.modalRef = this.modalService.show(
            this.modalTambahTerapi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSetupTerapi() {
        console.log('setup terapi')
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupTerapi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    /* ==== Method Generik ====== */
    handleTambahTerapiGenerik(reset: boolean) {
        this.id_terapi_g.setValue(this.CurrentDataTerapi.id);
        if (reset) {
            this.FormInputDataTerapiGenerik.reset();
        }
        this.modalRef = this.modalService.show(
            this.modalTambahTerapiGenerik,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanTerapiGenerik() {
        this.setupTerapiGenerikService.onPostSave(this.FormInputDataTerapiGenerik.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.FormInputDataTerapiGenerik.reset();
                    this.modalRef.hide();
                    this.setupTerapiGenerikService.setDataSource(this.CurrentDataTerapi.id);
                });
        })
    }

    handleSelectedGeneric(args) {
        this.CurrentDataTerapiGenerik = args.data
        console.log(this.CurrentDataTerapiGenerik)
        this.setupFormulariumService.setDataSource(this.CurrentDataTerapiGenerik.id_generik);
    }
    // ==== Method Formularium =======
    handleTambahFormularium(reset: boolean) {
        this.id_terapi_f.setValue(this.CurrentDataTerapi.id);
        this.id_generik_f.setValue(this.CurrentDataTerapiGenerik.id_generik);
        if (reset) {
            this.FormInputDataFormularium.reset();
        }
        this.modalRef = this.modalService.show(
            this.modalTambahFormularium,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanFormularium() {
        this.setupFormulariumService.onPostSave(this.FormInputDataFormularium.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.FormInputDataFormularium.reset();
                    this.modalRef.hide();
                    this.setupFormulariumService.setDataSource(this.CurrentDataTerapiGenerik.id_generik);
                });
        })
    }

    //==============

    //++++++++ Setup Generik

    handleSetupGenerik() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupGenerik,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanGenerik() {
        this.setupGenerikService.onPostSave(this.FormInputDataGenerik.value)
            .subscribe((result: SetupGenerikModel) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.setupGenerikService.setDataSource();
                        this.id_generik_g.setValue(result.data);
                        this.modalRef.hide();
                        this.modalRef = this.modalService.show(
                            this.modalTambahTerapiGenerik,
                            Object.assign({}, { class: 'modal-lg' })
                        );
                    });
            });
    }

    //++++++++ Setup Sediaan

    handleSetupSediaan() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupSediaan,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanSediaan() {
        this.setupSediaanObatService.onPostSave(this.FormInputDataSediaan.value)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.setupSediaanObatService.setDataSource();
                        this.id_sediaan_obat_f.setValue(result.data);
                        this.modalRef.hide();
                        this.modalRef = this.modalService.show(
                            this.modalTambahFormularium,
                            Object.assign({}, { class: 'modal-lg' })
                        );
                    });
            });
    }

    //++++++++ Setup Restriksi

    handleSetupRestriksi() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupRestriksi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanRestriksi() {
        this.setupRestriksiObatService.onPostSave(this.FormInputDataRestriksi.value)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.setupRestriksiObatService.setDataSource();
                        this.id_restriksi_obat_f.setValue(result.data);
                        this.modalRef.hide();
                        this.modalRef = this.modalService.show(
                            this.modalTambahFormularium,
                            Object.assign({}, { class: 'modal-lg' })
                        );
                    });
            });
    }

    //++++++++ Setup Peresepan Maksimal

    handleSetupPeresepanMaksimal() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupPeresepanMaksimal,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSimpanPeresepanMaksimal() {
        this.setupPeresepanMaksimalService.onPostSave(this.FormInputDataPeresepanMaksimal.value)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.setupPeresepanMaksimalService.setDataSource();
                        this.id_peresepan_maksimal_f.setValue(result.data);
                        this.modalRef.hide();
                        this.modalRef = this.modalService.show(
                            this.modalTambahFormularium,
                            Object.assign({}, { class: 'modal-lg' })
                        );
                    });
            });
    }

    handleSelectedSediaan(args) {
        console.log(args);
        this.DataSourceRestreksi = this.GridSetting.GridKeterangan.DataSource
        this.DataSourceMax = this.GridSetting.GridPeresepan.DataSource
        this.DataSourceDagang = this.GridSetting.GridItem.DataSource
    }

    get parent_terapi(): AbstractControl { return this.FormInputDataTerapi.get('parent_terapi'); }
    get id_terapi_parent(): AbstractControl { return this.FormInputDataTerapi.get('id_terapi_parent'); }
    get kode_terapi(): AbstractControl { return this.FormInputDataTerapi.get('kode_terapi'); }
    get no_terapi(): AbstractControl { return this.FormInputDataTerapi.get('no_terapi'); }
    get nama_terapi(): AbstractControl { return this.FormInputDataTerapi.get('nama_terapi'); }
    get level_rekursif_terapi(): AbstractControl { return this.FormInputDataTerapi.get('level_rekursif_terapi'); }

    get id_terapi_g(): AbstractControl { return this.FormInputDataTerapiGenerik.get('id_terapi'); }
    get id_generik_g(): AbstractControl { return this.FormInputDataTerapiGenerik.get('id_generik'); }
    get no_terapi_generik(): AbstractControl { return this.FormInputDataTerapiGenerik.get('no_terapi_generik'); }

    get id_formularium(): AbstractControl { return this.FormInputDataFormularium.get('id_formularium'); }
    get id_generik_f(): AbstractControl { return this.FormInputDataFormularium.get('id_generik'); }
    get id_terapi_f(): AbstractControl { return this.FormInputDataFormularium.get('id_terapi'); }
    get id_jenis_formularium_f(): AbstractControl { return this.FormInputDataFormularium.get('id_jenis_formularium'); }
    get id_sediaan_obat_f(): AbstractControl { return this.FormInputDataFormularium.get('id_sediaan_obat'); }
    get id_restriksi_obat_f(): AbstractControl { return this.FormInputDataFormularium.get('id_restriksi_obat'); }
    get id_peresepan_maksimal_f(): AbstractControl { return this.FormInputDataFormularium.get('id_peresepan_maksimal'); }
    get keterangan(): AbstractControl { return this.FormInputDataFormularium.get('keterangan'); }
    get tgl_berlaku(): AbstractControl { return this.FormInputDataFormularium.get('tgl_berlaku'); }
    get tgl_berakhir(): AbstractControl { return this.FormInputDataFormularium.get('tgl_berakhir'); }

    get no_generik(): AbstractControl { return this.FormInputDataGenerik.get('no_generik'); }
    get nama_generik(): AbstractControl { return this.FormInputDataGenerik.get('nama_generik'); }

    get nilai_maksimal(): AbstractControl { return this.FormInputDataPeresepanMaksimal.get('nilai_maksimal'); }
    get id_parameter_maksimal(): AbstractControl { return this.FormInputDataPeresepanMaksimal.get('id_parameter_maksimal'); }
    get peresepan_maksimal(): AbstractControl { return this.FormInputDataPeresepanMaksimal.get('peresepan_maksimal'); }

}
