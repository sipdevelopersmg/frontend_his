import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EventRenderedArgs, EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { IAntrianRegulerPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-reguler-pemesanan-bed.model';
import { AntrianRegulerService } from 'src/app/modules/PIS/services/IRNA/antrian-reguler/antrian-reguler.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-list-antrian-reguler',
    templateUrl: './list-antrian-reguler.component.html',
    styleUrls: ['./list-antrian-reguler.component.css']
})
export class ListAntrianRegulerComponent implements OnInit {

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any[];
    DropdownKelasFields: any;

    @ViewChild('ScheduleAntrianRegulerComp') ScheduleAntrianRegulerComp: ScheduleComponent;

    data: object[] = [];

    eventSettings: EventSettingsModel = {
        dataSource: this.data
    }

    selectedDate: Date = new Date();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private antrianRegulerService: AntrianRegulerService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.onGetDataKelasPerawatan();
    }

    onGetDataKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
                this.DropdownKelasFields = { text: 'nama_kelas', value: 'nama_kelas' }
            })
    }

    onChangeDropdownKelasPerawatan(args: any): void {
        const data = args.itemData;

        const parameter = [
            {
                "columnName": "kp.nama_kelas",
                "filter": "like",
                "searchText": data.nama_kelas,
                "searchText2": ""
            }
        ];

        this.antrianRegulerService.onGetAllAntrianReguler(parameter)
            .subscribe((result) => {
                const data = result.data.filter((item) => { return item.status_booking === 'APPROVED' });
                this.onSetScheduleDatasource(data);
            });
    }

    onSetScheduleDatasource(data: IAntrianRegulerPemesananBedModel[]): void {
        let filteredData = [];

        data.forEach((item) => {
            filteredData.push({
                Id: item.id_booking,
                Subject: item.nama_pasien,
                StartTime: new Date(item.tgl_rencana_inap),
                EndTime: new Date(item.tgl_rencana_inap),
                IsAllDay: false,
                CategoryColor: this.utilityService.onGenerateCustomColor()
            });
        });

        this.ScheduleAntrianRegulerComp.eventSettings.dataSource = filteredData;
    }

    onEventRendered(args: EventRenderedArgs): void {
        const CategoryColor: string = args.data.CategoryColor as string;

        if (!args.element || !CategoryColor) {
            return;
        }

        if (this.ScheduleAntrianRegulerComp.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = CategoryColor;
        } else {
            args.element.style.backgroundColor = CategoryColor;
        }
    }
}
