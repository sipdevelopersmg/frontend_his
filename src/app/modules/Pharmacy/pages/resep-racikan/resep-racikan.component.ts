import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailRowService, GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import { DetailResepRacikanModel, ResepRacikanModel } from '../../models/resep-racikan/resep-racikan.model';
import { ResepRacikanService } from '../../services/resep-racikan/resep-racikan.service';

@Component({
    selector: 'app-resep-racikan',
    templateUrl: './resep-racikan.component.html',
    styleUrls: ['./resep-racikan.component.css'],
    providers: [DetailRowService]
})
export class ResepRacikanComponent implements OnInit {

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;

    /**
     * @GridResepRacikanDatasource 
    */
    GridResepRacikanDatasource: ResepRacikanModel[] = [];

    /**
     * @GridDetailResepRacikanDatasource 
    */
    GridDetailResepRacikanDatasource: DetailResepRacikanModel[] = [];

    ChildGrid: GridModel = {
        dataSource: this.GridDetailResepRacikanDatasource,
        queryString: "id_obat",
        rowHeight: 30,
        allowResizing: true,
        allowTextWrap: true,
        textWrapSettings: { wrapMode: 'Both' },
        toolbar: [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-xs', id: 'Add' },
            "Search"
        ],
        editSettings: { allowAdding: true },
        columns: [
            { field: "id_obat", headerText: 'ID Obat', visible: false },
            { field: "nama_obat", headerText: 'Nama Obat', width: 200 },
            { field: "satuan", headerText: 'Satuan', width: 100 },
            { field: "satuan_terkecil", headerText: 'Satuan Terkecil', width: 100 },
            { field: "dosis_obat", headerText: 'Dosis Obat', textAlign: 'Right', width: 80 },
            { field: "dosis_yg_diinginkan", headerText: 'Dosis yang Diinginkan', width: 100, headerTextAlign: 'Center', textAlign: 'Right' },
            { field: "jumlah", headerText: 'Jumlah', textAlign: 'Right', width: 100, format: 'N2' },
            { field: "harga", headerText: 'Harga (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
            { field: "subtotal", headerText: 'Subtotal (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
        ],
    }

    constructor(private resepRacikanService: ResepRacikanService) { }

    ngOnInit(): void {
        this.resepRacikanService.onGetResepRacikanDummy()
            .subscribe((result) => {
                this.GridResepRacikanDatasource = result;
            });
    }

    onLoad(args: any) {
        this.resepRacikanService.onGetDetailResepRacikanDummy()
            .subscribe((result) => {
                this.GridResepRacikan.childGrid.dataSource = result;
            });
    }
}
