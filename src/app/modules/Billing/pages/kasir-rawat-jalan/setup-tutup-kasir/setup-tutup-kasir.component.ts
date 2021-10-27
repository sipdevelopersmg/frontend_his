import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import * as Config from './json/setup-tutup-kasir.config.json';

@Component({
    selector: 'app-setup-tutup-kasir',
    templateUrl: './setup-tutup-kasir.component.html',
    styleUrls: ['./setup-tutup-kasir.component.css']
})
export class SetupTutupKasirComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[];

    GridConfig = Config;

    GridDatasource: any[];
    private GridData: MolGridComponent = null;
    @ViewChild('JumlahModalKasir') JumlahModalKasir: NumericTextBoxComponent;

    GridSetoranDatasource: any[];
    private GridDataSetoran: MolGridComponent = null;
    @ViewChild('JumlahSetoranKasir') JumlahSetoranKasir: NumericTextBoxComponent;

    @ViewChild('JumlahPenerimaan') JumlahPenerimaan: NumericTextBoxComponent;

    PaymentMethodForTutupKasir: any[] = [];

    screenWidth: any;

    @ViewChild('JumlahPendapatanKasir') JumlahPendapatanKasir: NumericTextBoxComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public setupKasirRawatJalanService: SetupKasirIrjaService,
        private setupPaymentMethodService: SetupPaymentMethodService,
    ) { }

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    ngOnInit(): void {
        this.onGetSaldoKasirForTutupKasir();

        this.setupPaymentMethodService.onSetPaymentMethodSubject();

        this.onDetectScreenSize(window.innerWidth);

        this.ButtonNav = [
            { Id: 'Save', Icons1: 'fa-save fa-sm', Captions: 'Save' }
        ];
    }

    ngAfterViewInit(): void {
        this.onSetFormPendapatanKasir();
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Save':
                this.onSubmitTutupKasir();
                break;
            default:
                break;
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    InitalizedGridSetoran(component: MolGridComponent) {
        this.GridDataSetoran = component;
    }

    onGetSaldoKasirForTutupKasir(): void {
        this.setupKasirRawatJalanService.onGetSaldoKasirForSetoran()
            .subscribe((result) => {
                let UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem("UserData"));

                let user_name = document.getElementById("user_name") as HTMLInputElement;
                user_name.value = Object.keys(result.data).length > 0 ? result.data['user_name'] : UserData.user_name;

                let full_name = document.getElementById("full_name") as HTMLInputElement;
                full_name.value = UserData.full_name;

                let waktu_buka_kasir = document.getElementById("waktu_buka_kasir") as HTMLInputElement;
                waktu_buka_kasir.value = this.utilityService.onFormatDate(result.data['waktu_buka_kasir'], 'Do MMMM yyyy HH:mm:ss');

                this.GridDatasource = Object.keys(result.data).length > 0 ? [result.data] : [];

                this.JumlahModalKasir.value = result.data['jumlah_modal_awal'];
            });

        this.setupKasirRawatJalanService.onGetHistorySetoranKasir()
            .subscribe((result) => {
                this.GridSetoranDatasource = result.data;

                let jumlah_setoran_kasir = 0;

                result.data.forEach((item) => {
                    jumlah_setoran_kasir += item['tambahan_setoran'];
                });

                this.JumlahSetoranKasir.value = jumlah_setoran_kasir;
            });
    }

    onSetFormPendapatanKasir(): void {
        this.setupPaymentMethodService.PaymentMethod$
            .subscribe((result) => {
                if (result.length > 0) {
                    result.forEach((item) => {
                        item['jumlah_penerimaan'] = 0;
                    });

                    this.PaymentMethodForTutupKasir = result;
                }
            });
    }

    handleChangeJumlahPenerimaan(args: any, index: number): void {
        this.PaymentMethodForTutupKasir[index]['jumlah_penerimaan'] = args.value;

        this.onCountJumlahPendapatanKasir();
    }

    onCountJumlahPendapatanKasir(): void {
        let jumlah_pendapatan_kasir = 0;

        this.PaymentMethodForTutupKasir.forEach((item) => {
            jumlah_pendapatan_kasir += item['jumlah_penerimaan'];
        });

        this.JumlahPendapatanKasir.value = jumlah_pendapatan_kasir;
    }

    onSubmitTutupKasir(): void {
        let keterangan_tutup_kasir = (document.getElementById("keterangan_tutup_kasir") as HTMLInputElement).value;

        let rekap_payment_kasir = this.PaymentMethodForTutupKasir;

        let parameter = {
            keterangan_tutup_kasir: keterangan_tutup_kasir,
            rekap_payment_kasir: rekap_payment_kasir
        };

        this.setupKasirRawatJalanService.onPostSaveTutupKasir(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setup Tutup Kasir Berhasil')
                        .then(() => {
                            this.onGetSaldoKasirForTutupKasir();

                            this.onSetFormPendapatanKasir();

                            this.onCountJumlahPendapatanKasir();
                        });
                }
            });
    }
}
