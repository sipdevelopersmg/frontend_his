import { AfterContentInit, AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_PIS_SETUP_DATA from '../../../../../api/PIS/SETUP_DATA';
import { InputHasilRadiologiService } from '../../../services/input-hasil-radiologi/input-hasil-radiologi.service';
import Config from '../json/input-hasil-radiologi.config.json';

@Component({
    selector: 'app-detail-hasil-radiologi',
    templateUrl: './detail-hasil-radiologi.component.html',
    styleUrls: ['./detail-hasil-radiologi.component.css']
})
export class DetailHasilRadiologiComponent implements OnInit, AfterViewInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA;

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Back', Icons1: 'fa-chevron-left fa-sm', Captions: 'Back' },
        { Id: 'New', Icons1: 'fa-file fa-sm', Captions: 'New' },
        { Id: 'Update', Icons1: 'fa-edit fa-sm', Captions: 'Update' },
        { Id: 'Save', Icons1: 'fa-save fa-sm', Captions: 'Simpan & New' },
    ];

    RiwayatHasilRadiologi: any[] = [];

    SelectedRiwayatHasilRadiologi: any;

    SelectedData: any;

    @ViewChild('LookupDokter') LookupDokter: OrgInputLookUpKodeComponent;
    UrlLookupDokter = this.API_PIS_SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    @ViewChild('DeskripsiRTE') DeskripsiRTE: RichTextEditorComponent;

    @ViewChild('KesanRTE') KesanRTE: RichTextEditorComponent;

    toolbarsRTE: object = {
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', '|',
            'FontSize', 'FontColor', '|',
            'LowerCase', 'UpperCase', '|',
            'Alignments', '|',
            'OrderedList', 'UnorderedList', '|',
            'Indent', 'Outdent',
        ]
    };

    FormDetailHasilRadiologi: FormGroup;

    screenWidth: any;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private inputHasilRadiologiService: InputHasilRadiologiService,
    ) { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        this.onSetFormDetailRadiologiAttributes();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.onGetDataDetail();
        }, 1);
    }

    onSetFormDetailRadiologiAttributes(): void {
        let date = this.utilityService.onFormatDate(new Date(), "Do/MMM/yyyy HH:mm")

        this.FormDetailHasilRadiologi = this.formBuilder.group({
            id_hasil_radiologi: [0, []],
            tgl_hasil: [date, []],
            id_order_penunjang: [0, []],
            id_order_penunjang_detail: [0, []],
            id_dokter: [0, []],
            dokter_pemeriksa: ["", []],
            nama_asisten: ["", []],
            hasil: ["", []],
            kesan: ["", []],
            status: ["", []],
        });
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl("dashboard/OM/input-hasil-radiologi");
                break;
            case 'New':
                this.onResetFormDetailRadiologi();
                break;
            case 'Update':
                this.onUpdateFormDetailRadiologi(this.FormDetailHasilRadiologi.value);
                break;
            case 'Save':
                this.onSubmitFormDetailRadiologi(this.FormDetailHasilRadiologi.value);
                break;
            default:
                break;
        }
    }

    onGetDataDetail(): void {
        this.SelectedData = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));

        setTimeout(() => {
            this.id_order_penunjang.setValue(this.SelectedData.detail.id_order_penunjang);
            this.id_order_penunjang_detail.setValue(this.SelectedData.detail.id_order_penunjang_detail);
            this.id_dokter.setValue(this.SelectedData.header.id_dokter);
            this.dokter_pemeriksa.setValue(this.SelectedData.header.nama_dokter);

            this.onGetRiwayatHasilRadiologi(this.SelectedData.detail.id_order_penunjang_detail);
        }, 500);
    }

    onGetRiwayatHasilRadiologi(id_order_penunjang_detail: number): void {
        this.inputHasilRadiologiService.onGetRiwayatHasilRadiologi(id_order_penunjang_detail)
            .subscribe((result) => {
                this.RiwayatHasilRadiologi = result.data;
            });
    }

    handleClickRiwayatDetail(item: any): void {
        this.id_hasil_radiologi.setValue(item.id_hasil_radiologi);
        this.tgl_hasil.setValue(item.tgl_riwayat);
        this.id_order_penunjang.setValue(item.id_order_penunjang);
        this.id_order_penunjang_detail.setValue(item.id_order_penunjang_detail);
        this.id_dokter.setValue(item.id_dokter);
        this.dokter_pemeriksa.setValue(item.nama_dokter);
        this.nama_asisten.setValue(item.nama_asisten);
        this.hasil.setValue(item.hasil);
        this.kesan.setValue(item.kesan);

        this.SelectedRiwayatHasilRadiologi = item;
    }

    handleClickPublishHasil(SelectedRiwayatHasilRadiologi: any): void {
        this.inputHasilRadiologiService.onPublish(SelectedRiwayatHasilRadiologi.id_hasil_radiologi, SelectedRiwayatHasilRadiologi.id_order_penunjang_detail)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Hasil Radiologi Berhasil Dipublish')
                        .then(() => {
                            this.onResetFormDetailRadiologi();

                            this.onGetRiwayatHasilRadiologi(SelectedRiwayatHasilRadiologi.id_order_penunjang_detail);
                        })
                }
            })
    }

    handleClickLookupDokterResident(args: any): void {
        this.LookupDokter.onOpenModal();
    }

    onGetSelectedLookupDokter(args: any): void {
        (<HTMLInputElement>document.getElementById('nama_asisten')).value = args.full_name;
        this.nama_asisten.setValue(args.full_name);
    }

    handleSelectedTabId(args: any): void {

    }

    onSubmitFormDetailRadiologi(FormDetailRadiologi: any): void {
        this.inputHasilRadiologiService.onPostSave(FormDetailRadiologi)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Hasil Radiologi Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormDetailRadiologi();

                            this.onGetRiwayatHasilRadiologi(FormDetailRadiologi.id_order_penunjang_detail);
                        })
                }
            });
    }

    onUpdateFormDetailRadiologi(FormDetailRadiologi: any): void {
        let parameter = {
            "id_hasil_radiologi": FormDetailRadiologi.id_hasil_radiologi,
            "hasil": FormDetailRadiologi.hasil,
            "kesan": FormDetailRadiologi.kesan,
            "id_dokter": FormDetailRadiologi.id_dokter,
            "nama_asisten": FormDetailRadiologi.nama_asisten
        };

        this.inputHasilRadiologiService.onUpdate(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Hasil Radiologi Berhasil Diupdate')
                        .then(() => {
                            this.onResetFormDetailRadiologi();

                            this.onGetRiwayatHasilRadiologi(FormDetailRadiologi.id_order_penunjang_detail);
                        })
                }
            })
    }

    onResetFormDetailRadiologi(): void {
        let date = this.utilityService.onFormatDate(new Date(), "Do/MMM/yyyy HH:mm");
        this.tgl_hasil.setValue(date);

        this.nama_asisten.setValue("");
        this.hasil.setValue("");
        this.kesan.setValue("");
        this.DeskripsiRTE.value = "";
        this.KesanRTE.value = "";

        this.onGetDataDetail();
    }

    get id_hasil_radiologi(): AbstractControl { return this.FormDetailHasilRadiologi.get('id_hasil_radiologi'); }
    get tgl_hasil(): AbstractControl { return this.FormDetailHasilRadiologi.get('tgl_hasil'); }
    get id_order_penunjang(): AbstractControl { return this.FormDetailHasilRadiologi.get('id_order_penunjang'); }
    get id_order_penunjang_detail(): AbstractControl { return this.FormDetailHasilRadiologi.get('id_order_penunjang_detail'); }
    get id_dokter(): AbstractControl { return this.FormDetailHasilRadiologi.get('id_dokter'); }
    get dokter_pemeriksa(): AbstractControl { return this.FormDetailHasilRadiologi.get('dokter_pemeriksa'); }
    get nama_asisten(): AbstractControl { return this.FormDetailHasilRadiologi.get('nama_asisten'); }
    get hasil(): AbstractControl { return this.FormDetailHasilRadiologi.get('hasil'); }
    get kesan(): AbstractControl { return this.FormDetailHasilRadiologi.get('kesan'); }
}
