import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EventRenderedArgs, EventSettingsModel, GroupModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { AntrianTerprogramService } from 'src/app/modules/PIS/services/IRNA/antrian-terprogram/antrian-terprogram.service';
import { SetupBedRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-bed-room/setup-bed-room.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-list-antrian-terprogram',
    templateUrl: './list-antrian-terprogram.component.html',
    styleUrls: ['./list-antrian-terprogram.component.css']
})
export class ListAntrianTerprogramComponent implements OnInit, AfterViewInit {

    FormSearch: FormGroup;

    @ViewChild('DropdownPoli') DropdownPoli: DropDownListComponent;
    DropdownPoliDatasource: PoliModel[] = [];
    DropdownPoliField: Object = { text: 'nama_poli', value: 'id_poli' };

    @ViewChild('ScheduleAntrianTerprogramComp') ScheduleAntrianTerprogramComp: ScheduleComponent;

    data: object[] = [];

    eventSettings: EventSettingsModel = {
        dataSource: this.data,
    };

    selectedDate: Date = new Date();

    group: GroupModel = {
        resources: ['RoomId', 'BedId']
    };

    RoomDatasource: any[] = [];

    BedDatasource: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private setupBedRoomService: SetupBedRoomService,
        private antrianTerprogramService: AntrianTerprogramService
    ) { }

    ngOnInit(): void {
        this.FormSearch = this.formBuilder.group({
            id_poli: [0, []],
            nama_poli: ["", []],
            id_setup_room: [0, []],
            room_no: ["", []]
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.onGetAllPoliIRNA();
        }, 1);
    }

    onGetAllPoliIRNA(): void {
        this.setupPoliService.onGetAllForLookupRawatInap([])
            .subscribe((result) => {
                this.DropdownPoliDatasource = result.data;
            });
    }

    handleChangeDropdownPoli(args: any): void {
        const data: PoliModel = args.itemData;
        this.id_poli.setValue(data.id_poli);
        this.nama_poli.setValue(data.nama_poli);

        const parameter = [{
            "columnName": "p.nama_poli",
            "filter": "like",
            "searchText": this.nama_poli.value,
            "searchText2": ""
        }]

        this.setupBedRoomService.onGetAllBedRoomByDynamicFilter(parameter)
            .subscribe((result) => {
                this.onGetRoomDatasource(result.data);
            });

        this.onManipulateDatasource(this.nama_poli.value);
    }

    onGetRoomDatasource(data: IBedModel[]): void {
        const seen = new Set();

        const filteredArr = data.filter((item) => {
            const duplicate = seen.has(item.id_setup_room);
            seen.add(item.id_setup_room);
            return !duplicate;
        });

        this.RoomDatasource = filteredArr.map((item) => {
            return {
                id: item.id_setup_room,
                text: `ROOM ${item.room_no}`,
                color: this.utilityService.onGenerateCustomColor()
            }
        });

        this.BedDatasource = data.map((item) => {
            return {
                id: item.id_setup_bed_room,
                text: `BED ${item.bed_no}`,
                groupId: item.id_setup_room,
                color: this.utilityService.onGenerateCustomColor()
            }
        });
    }

    onManipulateDatasource(nama_poli: string): void {
        this.antrianTerprogramService.onGetAllAntrianTerprogram([{ columnName: "p.nama_poli", filter: "like", searchText: nama_poli, searchText2: "" }])
            .subscribe((result) => {
                const rawData = result.data;

                let filteredData = [];

                rawData.forEach((item) => {
                    if (item.status_booking === "APPROVED") {

                        const startTime = this.utilityService.onFormatDate(item.tgl_rencana_inap, 'yyyy-MM-Do');
                        const endTime = this.utilityService.onFormatDate(item.tgl_rencana_pulang, 'yyyy-MM-Do');

                        filteredData.push({
                            Id: item.id_booking,
                            Subject: item.nama_pasien,
                            StartTime: new Date(`${startTime}T00:00:00`),
                            EndTime: new Date(`${endTime}T23:59:59`),
                            IsAllDay: false,
                            RoomId: item.id_setup_room == 0 ? item.id_setup_room_booked : item.id_setup_room,
                            BedId: item.id_setup_bed_room == 0 ? item.id_setup_bed_room_booked : item.id_setup_bed_room
                        });
                    };
                });

                this.ScheduleAntrianTerprogramComp.eventSettings.dataSource = filteredData;
            });
    }

    onEventRendered(args: EventRenderedArgs): void {
        const CategoryColor: string = args.data.CategoryColor as string;

        if (!args.element || !CategoryColor) {
            return;
        }

        if (this.ScheduleAntrianTerprogramComp.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = CategoryColor;
        } else {
            args.element.style.backgroundColor = CategoryColor;
        }
    }

    get id_poli(): AbstractControl { return this.FormSearch.get('id_poli'); }
    get nama_poli(): AbstractControl { return this.FormSearch.get('nama_poli'); }
    get id_setup_room(): AbstractControl { return this.FormSearch.get('id_setup_room'); }
    get room_no(): AbstractControl { return this.FormSearch.get('room_no'); }
}
