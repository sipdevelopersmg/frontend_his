import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { threadId } from 'worker_threads';
import { SetupTerapiService } from '../../../services/formularium/setup-terapi/setup-terapi.service';
import * as gridSetting from '../json/GridSetting.json'
@Component({
  selector: 'app-setup-formularium',
  templateUrl: './setup-formularium.component.html',
  styleUrls: ['./setup-formularium.component.css']
})
export class SetupFormulariumComponent implements OnInit {

  public GridSetting = gridSetting

  public wrapSettings: TextWrapSettingsModel;
  
  public field: Object 
  
  public allowMultiSelection: boolean = true;

  modalRef: BsModalRef;

  @ViewChild('modalTambahTerapi') modalTambahTerapi: TemplateRef<any>;
  @ViewChild('modalSetupTerapi') modalSetupTerapi: TemplateRef<any>;


  @ViewChild('TerapiDropdown') TerapiDropdown: DropDownListComponent;
  TerapiDropdownDatasource: object[] = [{ text: 'ANALGESIK, ANTIPIRETIK, ANTIINFLAMASI NON STEROID, ANTIPIRAI', value: '1' }, { text: 'ANASTETIK', value: '2' }];
  TerapiDropdownField: object = { text: 'text', value: 'value' };
  
  GridGeneric: MolGridComponent = null;

  DataSourceGeneric = [];
  DataSourceSediaan = [];
  DataSourceRestreksi = [];
  DataSourceMax = [];
  DataSourceDagang = [];
  
  CurrentDataTerapi : any;

  //Form Input 
  FormInputDataTerapi: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    public setupTerapiService:SetupTerapiService,
  ) { }

  ngOnInit(): void {
    this.wrapSettings = { wrapMode: 'Content' };
    this.FormInputDataTerapi = this.formBuilder.group({
      id_terapi: [0, []],
      id_terapi_parent: [null, []],
      parent_terapi: ['', []],
      no_terapi: ['', [Validators.required]],
      kode_terapi: ['', [Validators.required]],
      nama_terapi: ['', [Validators.required]],
      level_rekursif_terapi: [1, [Validators.required]],
    });
    this.getAllTerapi();
  }

  public nodeSelected(e: NodeSelectEventArgs) {
    // alert("The selected node's id: " + this.tree.selectedNodes); // To alert the selected node's id.
    console.log(e);
    this.CurrentDataTerapi = e.nodeData;
    this.DataSourceGeneric = this.GridSetting.GridGenerik.DataSource
    // this.GridGeneric.Grid.refresh();
  };

  getAllTerapi(){
    this.setupTerapiService.onGetAll().subscribe((result)=>{
      this.field = { dataSource: result.data, id: 'id_terapi', parentID: 'id_terapi_parent', text: 'nama_terapi', hasChildren: 'is_active' }
    })
  }

  handleSimpanTerapi(){
    this.setupTerapiService.onPostSave(this.FormInputDataTerapi.value).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
        .then(() => {
          this.FormInputDataTerapi.reset();
          this.modalRef.hide();
          this.getAllTerapi();
        });
    })
  }

  handleAddTerapi(){
    this.id_terapi_parent.setValue(null);
    this.parent_terapi.setValue('');
    this.level_rekursif_terapi.setValue(1);
    this.modalRef = this.modalService.show(
      this.modalTambahTerapi,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  handleSubTerapi(){
    this.id_terapi_parent.setValue(this.CurrentDataTerapi.id);
    this.parent_terapi.setValue(this.CurrentDataTerapi.text);
    this.level_rekursif_terapi.setValue(2);
    this.modalRef = this.modalService.show(
      this.modalTambahTerapi,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  handleSetupTerapi(){
    console.log('setup terapi')
    this.modalRef.hide();
    this.modalRef = this.modalService.show(
      this.modalSetupTerapi,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  

  handleSelectedGeneric(args){
    console.log(args);
    this.DataSourceSediaan = this.GridSetting.GridSediaan.DataSource
  }

  handleSelectedSediaan(args){
    console.log(args);
    this.DataSourceRestreksi = this.GridSetting.GridKeterangan.DataSource
    this.DataSourceMax = this.GridSetting.GridPeresepan.DataSource
    this.DataSourceDagang = this.GridSetting.GridItem.DataSource
  }  
  get parent_terapi(): AbstractControl { return this.FormInputDataTerapi.get('parent_terapi'); }
  get id_terapi_parent(): AbstractControl { return this.FormInputDataTerapi.get('id_terapi_parent'); }
  get kode_terapi(): AbstractControl { return this.FormInputDataTerapi.get('kode_terapi'); }
  get no_terapi(): AbstractControl { return this.FormInputDataTerapi.get('no_terapi'); }
  get nama_terapi(): AbstractControl { return this.FormInputDataTerapi.get('nama_terapi'); }
  get level_rekursif_terapi(): AbstractControl { return this.FormInputDataTerapi.get('level_rekursif_terapi'); }

}
