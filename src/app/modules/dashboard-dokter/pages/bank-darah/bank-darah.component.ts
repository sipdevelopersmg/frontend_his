import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { IDaftarPasienIRJAModel } from '../../models/daftar_pasien.model';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import * as Config from './json/bank-darah.config.json';

@Component({
    selector: 'app-bank-darah',
    templateUrl: './bank-darah.component.html',
    styleUrls: ['./bank-darah.component.css']
})
export class BankDarahComponent implements OnInit {

    Config = Config;

    FormBankDarah: FormGroup;

    ActivePasien: IDaftarPasienIRJAModel = this.daftarPasienService.ActivePasien.value;

    GridData: MolGridComponent = null;
    GridBankDarahDatasource: any[];
    GridBankDarahToolbar: any[] = [
        { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
    ];

    constructor(
        private formBuilder: FormBuilder,
        private daftarPasienService: DaftarPasienService
    ) { }

    ngOnInit(): void {
        this.FormBankDarah = this.formBuilder.group({
            id_register: [this.ActivePasien.id_register, []]
        });
    }

    handleOpenModalBankDarah(): void {
        let btnBankDarah = document.getElementById('btnBankDarah') as HTMLElement;
        btnBankDarah.click();
    }

    handleCloseModalBankDarah(): void {
        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
        btnCloseModal.click();
    }

    handleSubmitBankDarah(FormBankDarah: any): void {

    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        // this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;
    }
}
