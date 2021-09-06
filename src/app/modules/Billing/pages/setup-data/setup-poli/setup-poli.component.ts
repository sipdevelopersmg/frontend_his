import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { JenisRuanganModel } from '../../../models/setup-data/setup-jenis-ruangan.model';
import { PoliRecursiveModel } from '../../../models/setup-data/setup-poli.model';
import { SetupJenisRuanganService } from '../../../services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupPoliService } from '../../../services/setup-data/setup-poli/setup-poli.service';

@Component({
    selector: 'app-setup-poli',
    templateUrl: './setup-poli.component.html',
    styleUrls: ['./setup-poli.component.css']
})
export class SetupPoliComponent implements OnInit {

    /**
     * @ButtonNav Variable Button Navigation  
    */
    ButtonNav: ButtonNavModel[];

    /**
     * @JenisRuanganDatasource Variable Jenis Ruangan Datasource
     * @Keterangan hasil response pada method onGetAllJenisRuangan()
    */
    JenisRuanganDatasource: JenisRuanganModel[];

    /**
     * @SearchRuangan Variable Pipe Search Ruangan
    */
    SearchRuangan: string;

    /**
     * @RuanganSelected Variable Nama Jenis Ruangan
     * @Keterangan Nama Jenis Ruangan terpilih dari Listing Jenis Ruangan
    */
    RuanganSelected: string;
    RuanganIdSelected: number;

    /**
     * @PoliklinikDatasource Variable Poliklinik Datasource
     * @Keterangan hasil response pada method onGetAllPoli()
    */
    PoliklinikDatasource: PoliRecursiveModel[] = [];

    /**
     * @PoliklinikByRuanganId Variable Poliklinik Per Ruangan Terpilih
     * @Keterangan hasil response pada method handleClickListingRuangan()
    */
    PoliklinikByRuanganId: PoliRecursiveModel[] = [];

    /**
     * @PoliklinikTreeViewFields Variable Poliklinik Treeview Fields
     * @Keterangan mapping field dan datasource Treeview Poliklinik
    */
    PoliklinikTreeViewFields: object = {};

    SelectedPoli: any[];

    /**
     * @FormPoliklinik Variable Poliklinik Form Group
     * @Keterangan Set Attribute nya di method onSetFormPoliklinikAttributes()
    */
    FormPoliklinik: FormGroup;

    /**
     * @FormPoliklinikState Variable Poliklinik State
     * @Keterangan perubahan State pada Form Poliklinik
    */
    FormPoliklinikState: string = "Insert";

    PoliklinikIsParent: boolean = false;

    /**
     * @modalRef Variable Modal Ref
    */
    modalRef: BsModalRef;
    @ViewChild('modalAddPoliklinik') modalAddPoliklinik: TemplateRef<any>;


    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService,
        private setupPoliService: SetupPoliService,
        private setupJenisRuanganService: SetupJenisRuanganService
    ) { }

    ngOnInit(): void {
        this.onGetAllJenisRuangan();

        this.onGetAllPoli();

        this.onSetFormPoliklinikAttributes();
    }

    onSetFormPoliklinikAttributes(): void {
        this.FormPoliklinik = this.formBuilder.group({
            id_poli: [0, []],
            id_poli_parent: [0, []],
            poli_parent: [0, []],
            id_jenis_ruangan: [0, []],
            jenis_ruangan: ["", []],
            id_outlet: [0, []],
            jenis_rawat: ["", []],
            kode_poli: ["", []],
            nama_poli: ["", []],
            is_active: [false, []]
        });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case "Simpan":
                break;
            case "Update":
                break;
            default: break;
        }
    }

    onGetAllJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.JenisRuanganDatasource = result.data;
                }
            })
    }

    onGetAllPoli(): void {
        this.setupPoliService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.PoliklinikDatasource = result.data;
                }
            })
    }

    onSearchFilter(FilterPencarianRuangan: string): void {
        this.SearchRuangan = FilterPencarianRuangan
    }

    handleClickListingRuangan(Ruangan: JenisRuanganModel): void {
        this.RuanganIdSelected = Ruangan.id_jenis_ruangan;
        this.RuanganSelected = Ruangan.jenis_ruangan;

        this.onGetPoliByRuanganId(Ruangan.id_jenis_ruangan);
    }

    onGetPoliByRuanganId(RuanganId: number): void {
        const PoliByRuanganId = this.PoliklinikDatasource.filter((item) => { return item.id_jenis_ruangan == RuanganId });

        this.PoliklinikByRuanganId = PoliByRuanganId;

        this.PoliklinikTreeViewFields = {
            dataSource: this.PoliklinikByRuanganId,
            id: 'id_poli',
            text: 'nama_poli_parent',
            child: 'child',
        }
    }

    handleSelectedPoli(args: any): void {
        this.SelectedPoli = args.nodeData;
    }

    handleAddNewPoli(): void {
        this.onResetFormPoliklinik();

        this.onFillFormPoliklinik('InsertNew');

        this.modalRef = this.bsModalService.show(
            this.modalAddPoliklinik,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleAddPoli(data?: PoliRecursiveModel): void {
        this.onResetFormPoliklinik();

        this.onFillFormPoliklinik('Insert', data);

        this.modalRef = this.bsModalService.show(
            this.modalAddPoliklinik,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSeeDetailPoli(data: PoliRecursiveModel): void {
        this.PoliklinikIsParent = data.id_poli_parent == 0 ? true : false;

        this.onResetFormPoliklinik();

        this.onFillFormPoliklinik('Update', data);

        this.modalRef = this.bsModalService.show(
            this.modalAddPoliklinik,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onFillFormPoliklinik(state: string, data?: any): void {

        this.FormPoliklinikState = state;

        if (data) {
            if (state == "Insert") {
                this.id_jenis_ruangan.setValue(this.RuanganIdSelected);
                this.jenis_ruangan.setValue(this.RuanganSelected);
                this.id_poli_parent.setValue(parseInt(this.SelectedPoli['id']));
                this.poli_parent.setValue(this.SelectedPoli['text']);
            } else {
                this.id_poli.setValue(data.id_poli);
                this.id_jenis_ruangan.setValue(data.id_jenis_ruangan);
                this.jenis_ruangan.setValue(data.jenis_ruangan);

                if (data.id_poli_parent > 0) {
                    this.id_poli_parent.setValue(data.id_poli_parent);
                    this.poli_parent.setValue(data.nama_poli_parent);
                } else {
                    this.id_poli_parent.setValue(0);
                    this.poli_parent.setValue(data.nama_poli);
                }

                switch (data.jenis_rawat) {
                    case "IRJA":
                        this.jenis_rawat.setValue('J');
                        break;
                    case "IRNA":
                        this.jenis_rawat.setValue('I');
                        break;
                    case "IRDA":
                        this.jenis_rawat.setValue('D');
                        break;
                    default:
                        break;
                };

                this.kode_poli.setValue(data.kode_poli);
                this.nama_poli.setValue(data.nama_poli);
                this.is_active.setValue(data.is_active);
            }
        } else {
            this.id_jenis_ruangan.setValue(this.RuanganIdSelected);
            this.jenis_ruangan.setValue(this.RuanganSelected);
            this.id_poli_parent.setValue(0);
            this.poli_parent.setValue("");
        }
    }

    handleCloseModalPoliklinik(): void {
        this.modalRef.hide();
    }

    handleSubmitFormPoliklinik(FormPoliklinik: any): void {
        if (FormPoliklinik.id_poli) {
            delete FormPoliklinik.id_poli;
        }

        this.setupPoliService.onPostSave(FormPoliklinik)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Poliklinik Berhasil Disimpan')
                        .then(() => {
                            this.handleCloseModalPoliklinik();

                            this.onGetPoliAfterFormAction(FormPoliklinik.id_jenis_ruangan);
                        })
                }
            })
    }

    handleUpdateFormPoliklinik(FormPoliklinik: any): void {
        this.setupPoliService.onPutEdit(FormPoliklinik)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Poliklinik Berhasil Diupdate')
                        .then(() => {
                            this.handleCloseModalPoliklinik();

                            this.onGetPoliAfterFormAction(FormPoliklinik.id_jenis_ruangan);
                        })
                }
            })
    }

    handleDeleteFormPoliklinik(FormPoliklinik: any): void {
        this.setupPoliService.onDelete(FormPoliklinik.id_poli)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Poliklinik Berhasil Dihapus')
                        .then(() => {
                            this.handleCloseModalPoliklinik();

                            this.onGetPoliAfterFormAction(FormPoliklinik.id_jenis_ruangan);
                        })
                }
            })
    }

    handleUpdateStatusFormPoliklinik(FormPoliklinik: any): void {
        this.setupPoliService.onPutStatusEdit(FormPoliklinik.id_poli, !FormPoliklinik.is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Poliklinik Berhasil Diupdate')
                        .then(() => {
                            this.handleCloseModalPoliklinik();

                            this.onGetPoliAfterFormAction(FormPoliklinik.id_jenis_ruangan);
                        })
                }
            })
    }

    onResetFormPoliklinik(): void {
        this.FormPoliklinik.reset();

        this.id_poli.setValue(0);
        this.id_poli_parent.setValue(0);
        this.poli_parent.setValue("");
        this.id_jenis_ruangan.setValue(0);
        this.jenis_ruangan.setValue("");
        this.id_outlet.setValue(0);
        this.jenis_rawat.setValue("");
        this.kode_poli.setValue("");
        this.nama_poli.setValue("");
    }

    onGetPoliAfterFormAction(RuanganId: number): void {
        this.setupPoliService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.PoliklinikDatasource = result.data;

                    const PoliByRuanganId = this.PoliklinikDatasource.filter((item) => { return item.id_jenis_ruangan == RuanganId });

                    this.PoliklinikByRuanganId = PoliByRuanganId;

                    this.PoliklinikTreeViewFields = {
                        dataSource: this.PoliklinikByRuanganId,
                        id: 'id_poli',
                        text: 'nama_poli_parent',
                        child: 'child',
                    }
                }
            })
    }

    get id_poli(): AbstractControl { return this.FormPoliklinik.get('id_poli') }
    get id_poli_parent(): AbstractControl { return this.FormPoliklinik.get('id_poli_parent') }
    get poli_parent(): AbstractControl { return this.FormPoliklinik.get('poli_parent') }
    get id_jenis_ruangan(): AbstractControl { return this.FormPoliklinik.get('id_jenis_ruangan') }
    get jenis_ruangan(): AbstractControl { return this.FormPoliklinik.get('jenis_ruangan') }
    get id_outlet(): AbstractControl { return this.FormPoliklinik.get('id_outlet') }
    get jenis_rawat(): AbstractControl { return this.FormPoliklinik.get('jenis_rawat') }
    get kode_poli(): AbstractControl { return this.FormPoliklinik.get('kode_poli') }
    get nama_poli(): AbstractControl { return this.FormPoliklinik.get('nama_poli') }
    get is_active(): AbstractControl { return this.FormPoliklinik.get('is_active') }
}
