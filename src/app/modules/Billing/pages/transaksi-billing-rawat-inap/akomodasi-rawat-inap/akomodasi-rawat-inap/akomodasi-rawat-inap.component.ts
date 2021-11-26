import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
// tslint:disable-next-line: max-line-length
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import * as API_BILLING from '../../../../../../api/BILLING';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-akomodasi-rawat-inap',
    templateUrl: './akomodasi-rawat-inap.component.html',
    styleUrls: ['./akomodasi-rawat-inap.component.css']
})
export class AkomodasiRawatInapComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    Config = Config;

    API_BILLING_SETUP_DATA = API_BILLING.API_BILLING.SETUP_DATA;

    API_BILLING_SETTING_TARIF = API_BILLING.API_BILLING.SETTING_HARGA_TARIF;

    FormAddDetailAkomodasi: FormGroup;

    @ViewChild('DatepickerTanggal') DatepickerTanggal: DatePickerComponent;

    @ViewChild('NumericTextboxQty') NumericTextboxQty: NumericTextBoxComponent;

    @ViewChild('LookupPoli') LookupPoli: OrgInputLookUpKodeComponent;
    UrlLookupPoli: string;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    @ViewChild('LookupTarif') LookupTarif: OrgInputLookUpKodeComponent;
    UrlLookupTarif: string;

    private GridAddDetailAkomodasi: MolGridComponent = null;
    GridAddDetailAkomodasiDatasource: any[] = [];
    GridAddDetailAkomodasiToolbar: any[];
    GridAddDetailAkomodasiEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridAddDetailAkomodasiSelectedIndex: number;

    constructor(
        private formBuilder: FormBuilder,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.FormAddDetailAkomodasi = this.formBuilder.group({
            tanggal: ['', [Validators.required]],
            qty: ['', [Validators.required]],
            id_poli: [0, [Validators.required]],
            nama_poli: [0, [Validators.required]],
            id_tarif: [0, [Validators.required]],
            kode_setup_tarif: ['', [Validators.required]],
            nama_setup_tarif: ['', [Validators.required]],
            nominal_tarif: [0, [Validators.required]],
            id_kelas_rawat: [0, [Validators.required]],
            kelas_rawat: ['', [Validators.required]],
        });

        this.UrlLookupPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;

        this.GridAddDetailAkomodasiToolbar = [
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.onGetAllKelasPelayanan();
    }

    handleOpenAkomodasiRawatInap(): void {
        const btnModalAkomodasiRawatInap = document.getElementById('btnModalAkomodasiRawatInap') as HTMLElement;
        btnModalAkomodasiRawatInap.click();
    }

    handleSelectedTabId(TabId: any): void {
        console.log(TabId);
    }

    onGetAllKelasPelayanan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
    }

    handleGetTogglingModalDetailAkomodasi(Toggle: boolean): void {
        if (Toggle) {
            this.handleOpenAddDetailAkomodasi();
        }
    }

    handleCloseAkomodasiRawatInap(): void {
        const btnCloseAkomodasiRawatInap = document.getElementById('btnCloseAkomodasiRawatInap') as HTMLElement;
        btnCloseAkomodasiRawatInap.click();
    }

    // ** MODAL ADD DETAIL AKOMODASI
    handleOpenAddDetailAkomodasi(): void {
        this.handleCloseAkomodasiRawatInap();

        setTimeout(() => {
            const btnModalAddDetailAkomodasi = document.getElementById('btnModalAddDetailAkomodasi') as HTMLElement;
            btnModalAddDetailAkomodasi.click();
        }, 500);
    }

    handleSelectedPoli(args: any): void {
        this.id_poli.setValue(args.id_poli);
        this.nama_poli.setValue(args.nama_poli);
        this.UrlLookupTarif = this.API_BILLING_SETTING_TARIF.SETTING_TARIF_BERLAKU.GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA;
    }

    handleSelectedTarif(args: any): void {
        this.id_tarif.setValue(args.id_setup_tarif);
        this.kode_setup_tarif.setValue(args.kode_setup_tarif);
        this.nama_setup_tarif.setValue(args.nama_setup_tarif);
        this.nominal_tarif.setValue(args.nominal_tarif);
    }

    handleChangeDropdownKelas(args: any): void {
        this.kelas_rawat.setValue(args.itemData.nama_kelas);
    }

    handleAddDataDetailAkomodasi(FormAddDetailAkomodasi: any): void {
        this.GridAddDetailAkomodasiDatasource.push(FormAddDetailAkomodasi);

        this.GridAddDetailAkomodasi.Grid.refresh();

        this.onResetFormAddDetailAkomodasi();
    }

    onResetFormAddDetailAkomodasi(): void {
        this.FormAddDetailAkomodasi.reset();

        this.tanggal.setValue('');
        this.qty.setValue(0);
        this.id_poli.setValue(0);
        this.nama_poli.setValue('');
        this.id_tarif.setValue(0);
        this.kode_setup_tarif.setValue('');
        this.nama_setup_tarif.setValue('');
        this.nominal_tarif.setValue(0);
        this.id_kelas_rawat.setValue(0);
        this.kelas_rawat.setValue('');

        this.DatepickerTanggal.value = null;

        this.NumericTextboxQty.value = 0;

        this.LookupPoli.resetValue();

        this.LookupTarif.resetValue();

        this.DropdownKelas.value = null;
    }

    InitalizedGrid(component: MolGridComponent): void {
        this.GridAddDetailAkomodasi = component;
    }

    handleSelectedRow(args: any): void {
        this.GridAddDetailAkomodasiSelectedIndex = args.rowIndex;
    }

    handleToolbarClick(args: any): void {
        const id = args.item.id;

        if (id === 'delete') {
            this.GridAddDetailAkomodasiDatasource.splice(this.GridAddDetailAkomodasiSelectedIndex, 1);

            this.GridAddDetailAkomodasi.Grid.refresh();
        }
    }

    handleSubmitAddDetailAkomodasi(data: any): void {
        console.log(data);
    }

    handleCloseAddDetailAkomodasi(): void {
        this.GridAddDetailAkomodasiDatasource = [];

        this.onResetFormAddDetailAkomodasi();

        setTimeout(() => {
            this.handleOpenAkomodasiRawatInap();
        }, 500);
    }

    get tanggal(): AbstractControl { return this.FormAddDetailAkomodasi.get('tanggal'); }
    get qty(): AbstractControl { return this.FormAddDetailAkomodasi.get('qty'); }
    get id_poli(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_poli'); }
    get nama_poli(): AbstractControl { return this.FormAddDetailAkomodasi.get('nama_poli'); }
    get id_tarif(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_tarif'); }
    get kode_setup_tarif(): AbstractControl { return this.FormAddDetailAkomodasi.get('kode_setup_tarif'); }
    get nama_setup_tarif(): AbstractControl { return this.FormAddDetailAkomodasi.get('nama_setup_tarif'); }
    get nominal_tarif(): AbstractControl { return this.FormAddDetailAkomodasi.get('nominal_tarif'); }
    get id_kelas_rawat(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_kelas_rawat'); }
    get kelas_rawat(): AbstractControl { return this.FormAddDetailAkomodasi.get('kelas_rawat'); }
}
