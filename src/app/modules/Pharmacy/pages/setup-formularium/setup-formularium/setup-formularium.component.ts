import { Component, OnInit } from '@angular/core';
import * as gridSetting from '../json/GridSetting.json'
@Component({
  selector: 'app-setup-formularium',
  templateUrl: './setup-formularium.component.html',
  styleUrls: ['./setup-formularium.component.css']
})
export class SetupFormulariumComponent implements OnInit {

  public GridSetting = gridSetting

  public localData: Object[] = [
    { id: 1, name: '1. ANALGESIK, ANTIPIRETIK, ANTIINFLAMASI NON STEROID, ANTIPIRAI', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: '1.1 ANALGESIK NARKOTIK' },
    { id: 3, pid: 1, name: '1.2 ANALGESIK NON NARKOTIK' },
    { id: 4, pid: 1, name: '1.3 ANTIPIRAI' },
    { id: 11, name: '2. ANASTETIK', hasChild: true },
    { id: 12, pid: 11, name: '2.1 ANASTETIK LOKAL' },
    { id: 13, pid: 11, name: '2.2 ANASTETIK UMUM DAN OKSIGEN' }
  ];

  public field: Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
