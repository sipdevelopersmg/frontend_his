import { Component, OnInit } from '@angular/core';
import { SetupKecamatanService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kecamatan.service';
import { SetupKotaService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kota.service';
import { SetupProvinsiService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-provinsi.service';

@Component({
  selector: 'org-input-wilayah',
  templateUrl: './org-input-wilayah.component.html',
  styleUrls: ['./org-input-wilayah.component.css']
})
export class OrgInputWilayahComponent implements OnInit {

    /**
   * @SetupWilayahDropdownField 
   * @Keterangan Dropdown Setup - Setup Wilayah Mapping Field
  */
  SetupWilayahDropdownField: object = { text: 'nama_wilayah', value: 'kode_wilayah' };
      
  constructor(
    public setupProvinsiService:SetupProvinsiService,
    public setupKotaService:SetupKotaService,
    public setupKecamatanService:SetupKecamatanService
  ) { }

  ngOnInit(): void {
    this.setupProvinsiService.setDataSource();
  }

  handleDropdownProvinsiChange(args: any): void {
    this.setupKotaService.onGetAll(args.itemData.kode_wilayah);
  }

  handleDropdownKotaChange(args: any): void {
    this.setupKecamatanService.onGetAll(args.itemData.kode_wilayah);
  }

}
