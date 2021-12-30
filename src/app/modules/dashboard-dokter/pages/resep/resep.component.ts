import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { ResepDokterService } from '../../services/resep-dokter/resep-dokter.service';
import moment from 'moment';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { InputResepComponent } from './input-resep/input-resep.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-resep',
    templateUrl: './resep.component.html',
    styleUrls: ['./resep.component.css'],
    providers: [BsModalService]
})

export class ResepComponent implements OnInit, AfterViewInit, OnDestroy {

    /**
    * Variable Button Nav
    * @ButtonNav: ButtonNavModel[]
    */
    ButtonNav: ButtonNavModel[] = [
        { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
        { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
        { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
    ];

    Data: any[] = [];
    @ViewChild('inputResepComponent') inputResepComponent: InputResepComponent;
    currentTanggal: string;
    isGetFromTemplate: boolean;
    modalRef: BsModalRef;
    @ViewChild('modalTemplateResep') modalTemplateResep: TemplateRef<any>;

    newdetail: any = [];
    baru: any = 0;
    data: any = null;
    nama_resep: string = '';
    idOutlet: number;
    constructor(
        private resepDokterService: ResepDokterService,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private modalService: BsModalService,
        public daftarPasienService: DaftarPasienService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.currentTanggal = moment().format()
        console.log(this.daftarPasienService.ActivePasien.value);
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "Template":
                this.inputResepComponent.handelClickTemplateResep();
            case "Reset":
                this.resepDokterService.reset();
                this.isGetFromTemplate = false;
                break;
            case "Simpan":
                this.Insert();
                break;
            default:
                break;
        }
    }

    onGetSelectedTabId(args: any): void {
        switch (args) {
            case "InputResep":
                this.ButtonNav = [
                    { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
                    { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
                    { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
                ];
                break;
            case "HistoryResep":
                this.ButtonNav = [];
                this.resepDokterService.setDataResep([]);
                break;
            default:
                break;
        }
    }

    onSetTemplateResep() {
        this.isGetFromTemplate = true;
    }

    setIdOutlet(id) {
        console.log(id);
        this.idOutlet = id;
    }

    async Insert() {
        if (!this.idOutlet) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '')
            return false;
        }
        this.data = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.idOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'J',
            nama_template: '',
            tanggal_resep: this.currentTanggal
        }

        let detail = await this.resepDokterService.dataDetail

        this.newdetail = detail.filter((item) => {
            return item.is_racikan && !item.set_racikan_id
        })

        this.baru = 0
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(
                this.modalTemplateResep,
                Object.assign({}, { class: 'modal-lg' })
            );
        } else {
            this.methodConfirmSetRacikan(0)
        }
    }

    handleClickSimpanTemplateResepDokter() {
        let nama_resep = (<HTMLInputElement>document.getElementsByName("nama_resep")[0]).value;
        this.data.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1)
    }

    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0)
    }

    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            Swal.fire({
                title: 'Apakah Anda Ingin Menyimapan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Saya Yakin',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1
                } else {
                    this.baru = 0
                }
                this.methodInsert(this.data, simpan_template, this.baru)
            });
        } else {
            this.methodInsert(this.data, simpan_template, 0)
        }
    }

    methodInsert(Data, is_simpan_template: number, is_simpan_racikan: number) {
        this.resepDokterService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    // this.resepDokterService.reset();
                    this.isGetFromTemplate = false;
                    this.reloadCurrentRoute();
                });
        })
    }

    reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
                this.router.navigate([currentUrl]);
            });
    }

    ngOnDestroy(): void {
        this.resepDokterService.reset();
    }

}
