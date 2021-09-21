import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { PoliRecursiveModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { GetAllDokterModel, IDokter } from '../../../models/setup-data/setup-dokter.model';
import { JadwalDokterModel, SetupHariModel } from '../../../models/setup-data/setup_jadwal_dokter.model';
import { SetupDokterService } from '../../../services/setup-data/setup-dokter/setup-dokter.service';
import { SetupJadwalDokterService } from '../../../services/setup-data/setup-jadwal-dokter/setup-jadwal-dokter.service';
import * as Config from './json/GridJadwalDokter.config.json';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-setup-jadwal-dokter',
    templateUrl: './setup-jadwal-dokter.component.html',
    styleUrls: ['./setup-jadwal-dokter.component.css']
})
export class SetupJadwalDokterComponent implements OnInit {

    Config = Config;

    /**
     * @DropdownRuanganDatasource Dropdown Ruangan Datasource
    */
    DropdownRuanganDatasource: JenisRuanganModel[];

    /**
      * @DropdownRuanganFields Mapping Field Dropdown Ruangan 
    */
    DropdownRuanganFields: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    /**
     * @PoliklinikDatasource Poliklinik Datasource
    */
    PoliklinikDatasource: PoliRecursiveModel[];

    /**
     * @PoliklinikTreeViewFields Poliklinik Treeview Mapping Fields
    */
    PoliklinikTreeViewFields: object = {};

    SelectedPoliklinik: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridDatasource: IDokter[] = [];
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[] = [];
    GridPageSettings = { pageSizes: false, pageSize: 12 };
    SelectedDokter: any;

    FormJadwalDokter: FormGroup;
    FormJadwalDokterState: string = "Detail";

    DataHari: SetupHariModel[];

    DataJadwalDokter: any;

    DataJadwalDokterEmptyForInsertNew: JadwalDokterModel = this.Config.JadwalDokterDummy;

    @ViewChild('LookupDokter') LookupDokter: OrgLookUpComponent;
    LookupDokterUrl: string = API_CONFIG.API_SETUP_DATA.SETUP_JADWAL_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private setupDokterService: SetupDokterService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupJadwalDokterService: SetupJadwalDokterService,
    ) { }

    ngOnInit(): void {
        this.onSetFormJadwalDokterAttributes();

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        ];

        this.onGetJenisRuangan();

        this.onGetAllSetupHari();
    }

    onSetFormJadwalDokterAttributes(): void {
        this.FormJadwalDokter = this.formBuilder.group({
            id_poli: [0, []],
            id_dokter: [0, []],
            id_hari: [0, []],
            jam_mulai: ["", []],
            jam_selesai: ["", []],
            kuota: ["", []],
            keterangan: ["", []],
        });
    }

    onGetJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.DropdownRuanganDatasource = result.data;
                }
            });
    }

    handleChangeDropdownRuangan(args: any): void {
        let id_jenis_ruangan = args.itemData.id_jenis_ruangan;

        this.onGetPoliByIdJenisRuangan(id_jenis_ruangan);
    }

    onGetPoliByIdJenisRuangan(JenisRuanganId: number): void {
        this.setupPoliService.onGetAllByIdJenisRuangan(JenisRuanganId)
            .subscribe((result) => {
                this.PoliklinikDatasource = result.data;

                this.PoliklinikTreeViewFields = {
                    dataSource: result.data,
                    id: 'id_poli',
                    text: 'nama_poli_parent',
                    child: 'child',
                }
            });
    }

    handleSelectedPoli(args: any): void {
        this.SelectedPoliklinik = args.nodeData;

        this.setupJadwalDokterService.onGetAllDokterByPoliId(args.nodeData.id)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            })
    }

    onGetAllSetupHari(): void {
        this.setupJadwalDokterService.onGetAllHari()
            .subscribe((result) => {
                this.DataHari = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.SelectedDokter = args.data;

        this.onGetJadwalDokter();
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.LookupDokter.onOpenModal();
                break;
            default:
                break;
        }
    }

    onGetJadwalDokter(id_dokter?: number, id_poli?: number): void {
        this.setupJadwalDokterService.onPostGetAllJadwalDokterByIdDokterAndIdPoli(this.SelectedDokter.id_dokter, parseInt(this.SelectedPoliklinik.id))
            .subscribe((result) => {
                let nama_dokter_div = document.getElementById("nama_dokter_div") as HTMLElement;
                nama_dokter_div.setAttribute("hidden", "true");

                result.data.jadwal.forEach((item) => {
                    if (item.waktu.length > 0) {
                        item.waktu.forEach((waktu) => {
                            let date = this.utilityService.onFormatDate(new Date(), "Do MMMM yyyy");

                            return item.waktu.sort((a, b) => { return new Date(date + " " + a.jam_mulai).getTime() - new Date(date + " " + b.jam_mulai).getTime() });
                        })
                    }
                });

                console.log(result.data.jadwal);

                this.DataJadwalDokter = result.data.jadwal;
            })
    }

    handleTogglingJadwalHarian(item: any): void {
        this.onHidePreviousSelectedDay(item);
    }

    handleAddJadwalHarian(item: any): void {
        this.onHidePreviousSelectedDay(item);
    }

    onHidePreviousSelectedDay(item: any): void {
        const hari = this.DataHari;

        hari.forEach((hari) => {
            let detail_waktu_el = document.getElementById(hari.nama_hari + 'Waktu') as HTMLElement;

            if (hari.nama_hari != item.nama_hari) {
                detail_waktu_el.setAttribute("hidden", "true");
            } else {
                detail_waktu_el.removeAttribute("hidden");
            }
        });

        this.onResetFormInputJadwalDokter();
    }

    handleShowFormInputJadwalDokter(item: any): void {
        this.FormJadwalDokterState = "Insert";
    }

    handleSubmitFormInputJadwalDokter(FormJadwalDokter: any, item: any): void {
        FormJadwalDokter.id_poli = parseInt(this.SelectedPoliklinik.id);
        FormJadwalDokter.id_dokter = parseInt(this.SelectedDokter.id_dokter);
        FormJadwalDokter.hari = parseInt(item.id_hari);

        this.setupJadwalDokterService.onPostSaveJadwalDokter(FormJadwalDokter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Jadwal Dokter Berhasil Disimpan')
                        .then(() => {
                            this.setupJadwalDokterService.onGetAllDokterByPoliId(FormJadwalDokter.id_poli)
                                .subscribe((result) => {
                                    this.GridDatasource = result.data;
                                });

                            this.onGetJadwalDokter(FormJadwalDokter.id_dokter, FormJadwalDokter.id_poli);

                            this.onResetFormInputJadwalDokter();
                        })
                }
            })
    }

    onResetFormInputJadwalDokter(): void {
        this.FormJadwalDokterState = "Detail";

        this.FormJadwalDokter.reset();

        this.id_poli.setValue(0);
        this.id_dokter.setValue(0);
        this.id_hari.setValue(0);
        this.jam_mulai.setValue("");
        this.jam_selesai.setValue("");
        this.kuota.setValue(0);
        this.keterangan.setValue("");
    }

    handleSelectedLookupDokter(args: IDokter): void {
        const cek = this.onCheckIfDokterExistingInSelectedPoli(args.id_dokter);

        if (cek) {
            this.utilityService.onShowingCustomAlert('error', 'Oops', `Dokter Sudah Ada Pada Poli ${this.SelectedPoliklinik.text}`);
        } else {
            let nama_dokter_div = document.getElementById("nama_dokter_div") as HTMLElement;
            nama_dokter_div.removeAttribute("hidden");

            let nama_dokter = document.getElementById('nama_dokter') as HTMLInputElement;
            nama_dokter.value = args.full_name;

            this.SelectedDokter = args;

            this.DataJadwalDokterEmptyForInsertNew.id_dokter = args.id_dokter;
            this.DataJadwalDokterEmptyForInsertNew.nama_dokter = args.full_name;
            this.DataJadwalDokterEmptyForInsertNew.id_poli = parseInt(this.SelectedPoliklinik.id);
            this.DataJadwalDokterEmptyForInsertNew.nama_poli = this.SelectedPoliklinik.text;

            this.DataJadwalDokter = this.DataJadwalDokterEmptyForInsertNew.jadwal;
        }
    }

    onCheckIfDokterExistingInSelectedPoli(DokterId: number) {
        const cek = this.GridDatasource.map((item) => { return item.id_dokter }).indexOf(DokterId);

        return cek > -1 ? true : false;
    }

    handleDeleteJadwalDokter(id_jadwal_dokter: number): void {
        this.setupJadwalDokterService.onDeleteJadwalDokter(id_jadwal_dokter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Jadwal Dokter Berhasil Dihapus`)
                        .then(() => {
                            this.onGetJadwalDokter(parseInt(this.SelectedDokter.id_dokter), parseInt(this.SelectedPoliklinik.id));
                        })
                }
            })
    }

    get id_poli(): AbstractControl { return this.FormJadwalDokter.get('id_poli'); }
    get id_dokter(): AbstractControl { return this.FormJadwalDokter.get('id_dokter'); }
    get id_hari(): AbstractControl { return this.FormJadwalDokter.get('id_hari'); }
    get jam_mulai(): AbstractControl { return this.FormJadwalDokter.get('jam_mulai'); }
    get jam_selesai(): AbstractControl { return this.FormJadwalDokter.get('id_poli'); }
    get kuota(): AbstractControl { return this.FormJadwalDokter.get('kuota'); }
    get keterangan(): AbstractControl { return this.FormJadwalDokter.get('keterangan'); }
}
