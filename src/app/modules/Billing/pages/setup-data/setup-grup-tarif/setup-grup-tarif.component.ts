import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { GrupTarifModel, GrupTarifRecursiveModel } from '../../../models/setup-data/setup-grup-tarif.model';
import { SetupGrupTarifService } from '../../../services/setup-data/setup-grup-tarif/setup-grup-tarif.service';

@Component({
    selector: 'app-setup-grup-tarif',
    templateUrl: './setup-grup-tarif.component.html',
    styleUrls: ['./setup-grup-tarif.component.css']
})
export class SetupGrupTarifComponent implements OnInit {

    /**
     * @GrupTarifData Data source Tree View Grup Tarif
    */
    public GrupTarifData: Object[] = [];

    /**
     * @GroupTarifFields Field Tree View Grup Tarif
    */
    GroupTarifFields: object;

    modalRef: BsModalRef;

    @ViewChild('modalAddGroupTarif') modalAddGroupTarif: TemplateRef<any>;

    FormGrupTarif: FormGroup;

    FormGrupTarifState = 'Insert';

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private utilityHelperService: UtilityHelperService,
        private setupGrupTarifService: SetupGrupTarifService,
    ) { }

    ngOnInit(): void {
        this.onGetAllGrupTarif();

        this.onSetFormGrupTarifAttributes();
    }

    onSetFormGrupTarifAttributes(): void {
        this.FormGrupTarif = this.formBuilder.group({
            id_grup_tarif_parent: [0, []],
            kode_grup_tarif_parent: ["", []],
            nama_grup_tarif_parent: ["", []],
            id_grup_tarif: [0, []],
            kode_grup_tarif: ["", []],
            nama_grup_tarif: ["", []],
            level: [0, []],
        });
    }

    onGetAllGrupTarif(): void {
        this.setupGrupTarifService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.GrupTarifData = result.data;

                    this.GroupTarifFields = {
                        dataSource: this.GrupTarifData,
                        id: 'id_grup_tarif',
                        parentID: 'id_grup_tarif_parent',
                        text: 'nama_grup_tarif_parent',
                        hasChild: 'child.length > 0',
                        level: 'level'
                    };
                }
            });
    }

    handleSelectedGroupTarif(args: any): void {
        // console.log(args);
    }

    handleNodeDropedGroupTarif(args: any): void {
        // console.log(args);
    }

    handleAddGroupTarif(data?: GrupTarifRecursiveModel): void {
        this.onResetFormGrupTarif();

        if (data) {
            this.onFillFormGrupTarifBasedOnTarifLevel(data, 'Insert');
        } else {
            this.id_grup_tarif_parent.setValue(0);
            this.level.setValue(1);
        }

        this.modalRef = this.bsModalService.show(
            this.modalAddGroupTarif,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSeeDetailGroupTarif(data: GrupTarifRecursiveModel): void {
        this.onResetFormGrupTarif();

        this.onFillFormGrupTarifBasedOnTarifLevel(data, 'Update')

        this.modalRef = this.bsModalService.show(
            this.modalAddGroupTarif,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onFillFormGrupTarifBasedOnTarifLevel(data: GrupTarifRecursiveModel, state: string): void {
        this.FormGrupTarifState = state;

        // ** Parent Top Level 1
        if (data.level == 1) {
            // ** Insert Ke Child Parent Level 2
            if (state == 'Insert') {
                this.id_grup_tarif_parent.setValue(data.id_grup_tarif);
                this.kode_grup_tarif_parent.setValue(data.kode_grup_tarif);
                this.nama_grup_tarif_parent.setValue(data.nama_grup_tarif);
                this.level.setValue(data.level + 1);
            }
            // ** Update Level 1
            else {
                this.id_grup_tarif_parent.setValue(data.id_grup_tarif_parent);
                this.id_grup_tarif.setValue(data.id_grup_tarif);
                this.kode_grup_tarif.setValue(data.kode_grup_tarif);
                this.nama_grup_tarif.setValue(data.nama_grup_tarif);
                this.level.setValue(data.level);
            }
        }
        // ** Child Level 2
        else if (data.level == 2) {
            if (state == 'Insert') {
                // this.id_grup_tarif_parent.setValue(data.id_grup_tarif);
                // this.kode_grup_tarif_parent.setValue(data.kode_grup_tarif);
                // this.nama_grup_tarif_parent.setValue(data.nama_grup_tarif);
                // this.level.setValue(data.level + 1);
            }
            // ** Update Level 2 
            else {
                this.id_grup_tarif_parent.setValue(data.id_grup_tarif_parent);
                this.kode_grup_tarif_parent.setValue(data.kode_group_tarif_parent);
                this.nama_grup_tarif_parent.setValue(data.nama_grup_tarif_parent);
                this.id_grup_tarif.setValue(data.id_grup_tarif);
                this.kode_grup_tarif.setValue(data.kode_grup_tarif);
                this.nama_grup_tarif.setValue(data.nama_grup_tarif);
                this.level.setValue(data.level);
            }
        }
        else {

        }
    }

    handleSubmitFormGrupTarif(FormGrupTarif: any): void {

        let parameter: GrupTarifModel;

        if (FormGrupTarif.level == 1) {
            parameter = {
                id_grup_tarif_parent: FormGrupTarif.id_grup_tarif_parent,
                kode_grup_tarif: FormGrupTarif.kode_grup_tarif,
                nama_grup_tarif: FormGrupTarif.nama_grup_tarif,
                level: FormGrupTarif.level,
            }
        } else {
            parameter = {
                id_grup_tarif_parent: FormGrupTarif.id_grup_tarif_parent,
                kode_grup_tarif: `${FormGrupTarif.kode_grup_tarif_parent}.${FormGrupTarif.kode_grup_tarif}`,
                nama_grup_tarif: FormGrupTarif.nama_grup_tarif,
                level: FormGrupTarif.level,
            }
        }

        this.setupGrupTarifService.onPostSave(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Grup Tarif Berhasil Disimpan')
                        .then(() => {
                            this.handleCloseModalGrupTarif();

                            this.onGetAllGrupTarif();
                        })
                }
            })
    }

    handleUpdateFormGrupTarif(FormGrupTarif: any): void {
        this.utilityHelperService.onRemoveInfo(FormGrupTarif, ['kode_grup_tarif_parent', 'nama_grup_tarif_parent']);

        this.setupGrupTarifService.onPutEdit(FormGrupTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Grup Tarif Berhasil Diupdate')
                        .then(() => {
                            this.handleCloseModalGrupTarif();

                            this.onGetAllGrupTarif();
                        });
                }
            })

    }

    handleCloseModalGrupTarif(): void {
        this.modalRef.hide();

        this.onResetFormGrupTarif();
    }

    onResetFormGrupTarif(): void {
        this.FormGrupTarif.reset();

        this.id_grup_tarif_parent.setValue(0);
        this.kode_grup_tarif_parent.setValue("");
        this.nama_grup_tarif_parent.setValue("");
        this.kode_grup_tarif.setValue("");
        this.nama_grup_tarif.setValue("");
        this.level.setValue(0);
    }

    get id_grup_tarif_parent(): AbstractControl { return this.FormGrupTarif.get('id_grup_tarif_parent') };
    get kode_grup_tarif_parent(): AbstractControl { return this.FormGrupTarif.get('kode_grup_tarif_parent') };
    get nama_grup_tarif_parent(): AbstractControl { return this.FormGrupTarif.get('nama_grup_tarif_parent') };
    get id_grup_tarif(): AbstractControl { return this.FormGrupTarif.get('id_grup_tarif') };
    get kode_grup_tarif(): AbstractControl { return this.FormGrupTarif.get('kode_grup_tarif') };
    get nama_grup_tarif(): AbstractControl { return this.FormGrupTarif.get('nama_grup_tarif') };
    get level(): AbstractControl { return this.FormGrupTarif.get('level') };
}
