import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { TarifPaketModel } from '../../../models/setup-data/setup-tarif-paket.model';
import { SetupTarifPaketService } from '../../../services/setup-data/setup-tarif-paket/setup-tarif-paket.service';
import * as Config from './json/GroupTarif.data.json';

@Component({
    selector: 'app-setup-tarif-paket',
    templateUrl: './setup-tarif-paket.component.html',
    styleUrls: ['./setup-tarif-paket.component.css']
})
export class SetupTarifPaketComponent implements OnInit {

    TarifPaketParentDatasource: TarifPaketModel[];

    SelectedTarifPaketParent: TarifPaketModel;

    TarifPaketChildDatasource: TarifPaketModel[];

    SelectedTarifPaketChild: TarifPaketModel;

    modalRef: BsModalRef;
    @ViewChild('modalAddLookupTarif') modalAddLookupTarif: TemplateRef<any>;

    GridLookupTarifDatasource: any[];
    GridLookupTarif: MolGridComponent = null;
    GridLookupTarifPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };
    GridLookupTarifSelectionSettings: object = { type: 'Multiple', enableSimpleMultiRowSelection: true }
    SelectedFilterLookupTarif: string;

    GridConfig = Config;

    SearchLookup: string;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupTarifPaketService: SetupTarifPaketService
    ) { }

    ngOnInit(): void {
        this.onGetAllTarifPaketParent();
    }

    onGetAllTarifPaketParent(): void {
        this.setupTarifPaketService.onGetAllTarifPaketParent()
            .subscribe((result) => {
                this.TarifPaketParentDatasource = result.data;
            });
    }

    handleClickTarifPaketParent(SetupTarif: TarifPaketModel): void {
        this.SelectedTarifPaketParent = SetupTarif;

        this.onGetAllChildTarifByPaketParentId(SetupTarif.id_setup_tarif);
    }

    onGetAllChildTarifByPaketParentId(PaketParentId: number): void {
        this.setupTarifPaketService.onGetAllTarifPaketChildByParentId(PaketParentId)
            .subscribe((result) => {
                this.TarifPaketChildDatasource = result.data;
            });
    }

    handleUbahStatusTarifBerlakuPoli(TarifPaketModel: any): void {
        this.setupTarifPaketService.onPutStatusActive(
            TarifPaketModel.id_setup_tarif_parent,
            TarifPaketModel.id_setup_tarif_child,
            !TarifPaketModel.is_active
        ).subscribe((result) => {
            if (result) {
                this.utilityService.onShowingCustomAlert('success', 'Success', `Ubah Status Tarif ${TarifPaketModel.kode_setup_tarif} Berhasil`)
                    .then(() => {
                        this.onGetAllChildTarifByPaketParentId(this.SelectedTarifPaketParent.id_setup_tarif);
                    })
            }
        })
    }

    handleDeleteTarifBerlakuPoli(TarifPaketModel: any): void {
        this.setupTarifPaketService.onPostDelete(
            TarifPaketModel.id_setup_tarif_parent,
            TarifPaketModel.id_setup_tarif_child
        ).subscribe((result) => {
            if (result) {
                this.utilityService.onShowingCustomAlert('success', 'Success', `Tarif Paket Berhasil Dihapus`)
                    .then(() => {
                        this.onGetAllChildTarifByPaketParentId(this.SelectedTarifPaketParent.id_setup_tarif);
                    })
            }
        });
    }

    // *** Start Section Of Filter Lookup =================
    hanldeOpenModalLookupTarif(): void {
        this.GridLookupTarifDatasource = [];

        this.modalRef = this.bsModalService.show(
            this.modalAddLookupTarif,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.SelectedFilterLookupTarif = "";

        this.setupTarifPaketService.onGetAllTarifChildForLookup()
            .subscribe((result) => {
                this.TarifPaketChildDatasource.filter((item) => {
                    let tarifIndex = result.data.map((tarif) => { return tarif.id_setup_tarif }).indexOf(item['id_setup_tarif_child']);

                    return result.data.splice(tarifIndex, 1);
                });

                this.GridLookupTarifDatasource = result.data;
            });
    }

    onSearchLookup(searchValueId: string): void {
        this.SearchLookup = searchValueId;
    }

    InitalizedGridLookupTarif(component: MolGridComponent): void {
        this.GridLookupTarif = component;
    }

    handleSubmitLookupTarif(): void {
        const SelectedRow = this.GridLookupTarif.Grid.getSelectedRecords();

        SelectedRow.forEach((item) => {
            item['id_setup_tarif_parent'] = this.SelectedTarifPaketParent.id_setup_tarif;
            item['id_setup_tarif_child'] = item['id_setup_tarif'];

            delete item['id_grup_tarif'];
            delete item['id_kelompok_tarif'];
            delete item['id_setup_tarif'];
            delete item['is_irda'];
            delete item['is_irja'];
            delete item['is_irna'];
            delete item['is_paket'];
            delete item['kode_setup_tarif'];
            delete item['nama_setup_tarif'];
        });

        this.setupTarifPaketService.onPostSave(SelectedRow)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Tarif Paket Berhasil Disimpan`)
                        .then(() => {
                            this.handleCloseModalLookupTarif();

                            this.onGetAllChildTarifByPaketParentId(this.SelectedTarifPaketParent.id_setup_tarif);
                        })
                }
            });
    }

    handleCloseModalLookupTarif(): void {
        this.modalRef.hide();
    }
    // *** End Section Of Filter Lookup =================
}
