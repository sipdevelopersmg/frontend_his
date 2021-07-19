import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';

@Component({
    selector: 'app-data-dokter',
    templateUrl: './data-dokter.component.html',
    styleUrls: ['./data-dokter.component.css']
})
export class DataDokterComponent implements OnInit {

    HeaderRibbon: string = "Data Dokter";
    HideHeaderRibbon: boolean = false;

    ButtonNav: ButtonNavModel[];

    GridDokterEditSettings: EditSettingsModel = { allowAdding: true };
    GridDokterToolbar: ToolbarItems[] = ["Add", "Search"];
    GridDokterColumns: Columns[];

    modalRef: BsModalRef;

    @ViewChild("GridDokterAddDialog") GridDokterAddDialog: TemplateRef<any>;

    constructor(private modalService: BsModalService) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "Save", Icons1: "fa-save", Captions: "Simpan" }
        ]

        this.GridDokterColumns = [
            { headerText: "Kode Dokter", width: 100, field: "KodeDokter", visible: true },
            { headerText: "Nama Dokter", width: 200, field: "NamaDokter", visible: true },
            { headerText: "Spesialisasi", width: 200, field: "Spesialisasi", visible: true },
            { headerText: "Alamat", width: 200, field: "Alamat", visible: true },
            { headerText: "Mobile", width: 100, field: "Mobile", visible: true },
            { headerText: "Phone", width: 100, field: "Phone", visible: true },
            { headerText: "Poli Tugas", width: 100, field: "Poli Tugas", visible: true },
        ];
    }

    onToolbarClick(args: any) {
        let action = args.item.text;

        if (action == "Add") {
            args.cancel = true;

            this.onOpenGridDokterAddDialog(this.GridDokterAddDialog);
        }
    }

    onOpenGridDokterAddDialog(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onCloseGridDokterAddDialog() {
        this.modalRef.hide();
    }

    onClickSimpan(): void {
        alert("Simpan");
    }
}
