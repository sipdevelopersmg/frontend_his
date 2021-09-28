import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { VerifikasiOrderLabService } from '../../services/verifikasi-order-lab/verifikasi-order-lab.service';

@Component({
    selector: 'app-verifikasi-order-lab',
    templateUrl: './verifikasi-order-lab.component.html',
    styleUrls: ['./verifikasi-order-lab.component.css']
})
export class VerifikasiOrderLabComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[] = [
        { text: 'No. Order', value: "otop.nomor_order_penunjang" },
        { text: 'Tgl. Order', value: 'otop.tanggal_order_penunjang' },
        { text: 'Nama Pasien', value: "concat(p.nama_depan, ' ',p.nama_belakang)" },
        { text: 'No. Register', value: 'tp.no_register' },
        { text: 'No. Rekam Medis', value: 'tp.no_rekam_medis' },
    ];

    GridDatasource: any[] = [];
    @ViewChild('GridData') GridData: GridComponent;
    GridToolbar: any[] = ["Search"];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridPageSettings = { pageSizes: false, pageSize: 12 };
    GridSelectedRow: any;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogVerifikasiOrderLab') modalDialogVerifikasiOrderLab: TemplateRef<any>;

    FormVerifikasiOrderLab: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private verifikasiOrderLabService: VerifikasiOrderLabService
    ) { }

    ngOnInit(): void {
        this.onSetFormVerifikasiOrderLab();

        this.handlePencarianFilter([]);
    }

    onSetFormVerifikasiOrderLab(): void {
        this.FormVerifikasiOrderLab = this.formBuilder.group({
            "id_order_penunjang": [0, []],
            "nomor_order_penunjang": ["", []],
            "no_register": ["", []],
            "no_rekam_medis": ["", []],
            "nama_pasien": ["", []],
            "tanggal_lahir": ["", []],
            "umur": ["", []],
            "nama_kelas": ["", []],
            "nama_debitur": ["", []],
            "alamat_lengkap": ["", []],
            "jam_periksa": ["", []],
            "kode_icd": ["", []],
            "nama_icd": ["", []],
            "keterangan_diagnosa": ["", []],
            "keterangan": ["", []],
            "nama_dokter": ["", []],
        });
    }

    handleClickButtonNav(ButtonId: string): void {

    }

    handlePencarianFilter(args?: any): void {
        let parameter = {
            kode_grup_penunjang: "LAB",
            jenis_rawat: "J",
            filters: args.length > 0 ? [...args] : []
        };

        this.verifikasiOrderLabService.onGetListOrderForVerifikasi(parameter)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedRow = args.data;

        this.onFillFormVerifikasiOrderLab(this.GridSelectedRow);
    }

    handleToolbarClick(args: any): void {

    }

    handleActionComplete(args: any): void {

    }

    onFillFormVerifikasiOrderLab(Data: any): void {
        console.log(Data);

        this.onOpenModalVerifikasiOrderLab();
    }

    onOpenModalVerifikasiOrderLab(): void {
        this.onResetFormVerifikasiOrderLab();

        this.modalRef = this.bsModalService.show(
            this.modalDialogVerifikasiOrderLab,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onSubmitFormVerifikasiOrderLab(FormVerifikasiOrderLab: any): void {

    }

    onResetFormVerifikasiOrderLab(): void {
        this.FormVerifikasiOrderLab.reset();

        this.id_order_penunjang.setValue(0);
        this.nomor_order_penunjang.setValue("");
        this.no_register.setValue("");
        this.no_rekam_medis.setValue("");
        this.nama_pasien.setValue("");
        this.tanggal_lahir.setValue("");
        this.umur.setValue("");
        this.nama_kelas.setValue("");
        this.nama_debitur.setValue("");
        this.alamat_lengkap.setValue("");
        this.jam_periksa.setValue("");
        this.kode_icd.setValue("");
        this.nama_icd.setValue("");
        this.keterangan_diagnosa.setValue("");
        this.keterangan.setValue("");
        this.nama_dokter.setValue("");
    }

    get id_order_penunjang(): AbstractControl { return this.FormVerifikasiOrderLab.get('id_order_penunjang'); }
    get nomor_order_penunjang(): AbstractControl { return this.FormVerifikasiOrderLab.get('nomor_order_penunjang'); }
    get no_register(): AbstractControl { return this.FormVerifikasiOrderLab.get('no_register'); }
    get no_rekam_medis(): AbstractControl { return this.FormVerifikasiOrderLab.get('no_rekam_medis'); }
    get nama_pasien(): AbstractControl { return this.FormVerifikasiOrderLab.get('nama_pasien'); }
    get tanggal_lahir(): AbstractControl { return this.FormVerifikasiOrderLab.get('tanggal_lahir'); }
    get umur(): AbstractControl { return this.FormVerifikasiOrderLab.get('umur'); }
    get nama_kelas(): AbstractControl { return this.FormVerifikasiOrderLab.get('nama_kelas'); }
    get nama_debitur(): AbstractControl { return this.FormVerifikasiOrderLab.get('nama_debitur'); }
    get alamat_lengkap(): AbstractControl { return this.FormVerifikasiOrderLab.get('alamat_lengkap'); }
    get jam_periksa(): AbstractControl { return this.FormVerifikasiOrderLab.get('jam_periksa'); }
    get kode_icd(): AbstractControl { return this.FormVerifikasiOrderLab.get('kode_icd'); }
    get nama_icd(): AbstractControl { return this.FormVerifikasiOrderLab.get('nama_icd'); }
    get keterangan_diagnosa(): AbstractControl { return this.FormVerifikasiOrderLab.get('keterangan_diagnosa'); }
    get keterangan(): AbstractControl { return this.FormVerifikasiOrderLab.get('keterangan'); }
    get nama_dokter(): AbstractControl { return this.FormVerifikasiOrderLab.get('nama_dokter'); }
}
