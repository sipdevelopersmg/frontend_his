(self.webpackChunkdashboard_template=self.webpackChunkdashboard_template||[]).push([[546],{8843:(t,e,i)=>{"use strict";i.r(e),i.d(e,{API_DASHBOARD_DOKTER:()=>Y});var a={};i.r(a),i.d(a,{GET_ALL_PASIEN_IRDA_BY_ID_DOKTER:()=>T,GET_ALL_PASIEN_IRJA_BY_ID_DOKTER:()=>A,GET_ALL_PASIEN_IRNA_BY_ID_DOKTER:()=>p});var s={};i.r(s),i.d(s,{GET_ALL_DATA_PENUNJANG:()=>S,GET_DETAIL_RIWAYAT_ORDER_LAB:()=>D,GET_RIWAYAT_ORDER_LAB:()=>_,POST_SAVE_ORDER_LAB:()=>P});var r={};i.r(r),i.d(r,{GET_ALL_DATA_PENUNJANG:()=>R,GET_DETAIL_RIWAYAT_ORDER_RAD:()=>g,GET_RIWAYAT_ORDER_RAD:()=>f,POST_GET_TARIF_RAD:()=>I,POST_SAVE_ORDER_RAD:()=>v});var n={};i.r(n),i.d(n,{GET_RIWAYAT_KONSUL_BY_ID_DOKTER:()=>G,POST_KONSUL_PASIEN_IRJA:()=>E});var o={};i.r(o),i.d(o,{GET_ALL:()=>m,GET_BY_ID:()=>O,POST_SAVE:()=>w,PUT_UPDATE:()=>b});var u={};i.r(u),i.d(u,{GET_ALL:()=>x,GET_BY_ID:()=>N,POST_SAVE:()=>L,PUT_UPDATE:()=>y});var h={};i.r(h),i.d(h,{GET_TARIF_ORDER_DARAH:()=>B,POST_SAVE:()=>k});var d={};i.r(d),i.d(d,{GET_ALL_BY_ID_REGISTER:()=>q,POST_SAVE:()=>K});var l={};i.r(l),i.d(l,{DELETE:()=>F,GET_ALL:()=>C,GET_BY_ID:()=>Z,POST_SAVE:()=>U,PUT_UPDATE:()=>M});var c=i(529);const A=`${c.NZ.webApiPis}Pasien/GetPasienIRJAByIdDokter/`,p=`${c.NZ.webApiPis}Pasien/GetPasienIRNAByIdDokter/`,T=`${c.NZ.webApiPis}Pasien/GetPasienIRDAByIdDokter/`,S=`${c.NZ.webApiPis}OmMappingTarifPenunjang/GetAllDataPenunjangLAB`,P=`${c.NZ.webApiPis}OrderManagement/InsertOrderLAB`,_=`${c.NZ.webApiPis}OrderManagement/GetHeaderRiwayatOrder_LAB_IRJA_ByIdRegister/`,D=`${c.NZ.webApiPis}OrderManagement/GetDetailRiwayatOrder_LAB_IRJA_ByIdOrderPenunjang/`,R=`${c.NZ.webApiPis}OmMappingTarifPenunjang/GetAllDataPenunjangRAD`,I=`${c.NZ.webApiPis}OmMappingTarifPenunjang/GetTarifRadByIdAndFlags`,v=`${c.NZ.webApiPis}OrderManagement/InsertOrderRAD`,f=`${c.NZ.webApiPis}OrderManagement/GetHeaderRiwayatOrder_RAD_IRJA_ByIdRegister/`,g=`${c.NZ.webApiPis}OrderManagement/GetDetailRiwayatOrder_RAD_IRJA_ByIdOrderPenunjang/`,E=`${c.NZ.webApiPis}Pasien/PasienKonsul_IRJA`,G=`${c.NZ.webApiPis}Pasien/GetRiwayatPasienKonsulByIdDokter/`,m=`${c.NZ.webApiPis}Alergi/GetAllByIdRegister/`,O=`${c.NZ.webApiPis}Alergi/GetByIdAlergi/`,w=`${c.NZ.webApiPis}Alergi/Insert`,b=`${c.NZ.webApiPis}Alergi/Update`,x=`${c.NZ.webApiPis}VitalSign/GetAllByIdRegister/`,N=`${c.NZ.webApiPis}VitalSign/GetByIdVitalSign/`,L=`${c.NZ.webApiPis}VitalSign/Insert`,y=`${c.NZ.webApiPis}VitalSign/Update`,k=`${c.NZ.webApiPis}OrderManagement/InsertOrderDARAH`,B=`${c.NZ.webApiPis}OrderManagement/GetTarifDarahForLookup`,q=`${c.NZ.webApiPis}DiagnosaAssesment/GetAllByIdRegister/`,K=`${c.NZ.webApiPis}DiagnosaAssesment/Insert`,C=`${c.NZ.webApiAdmisi}TrPerintahMondok/GetAll`,Z=`${c.NZ.webApiAdmisi}TrPerintahMondok/GetById/`,U=`${c.NZ.webApiAdmisi}TrPerintahMondok/Insert`,F=`${c.NZ.webApiAdmisi}TrPerintahMondok/Delete/`,M=`${c.NZ.webApiAdmisi}TrPerintahMondok/Update`,Y=Object.assign({},{API_PERIKSA_PASIEN:`${c.NZ.webApiPis}Pasien/PasienPeriksa`,DAFTAR_PASIEN:a,LABORATORIUM:s,RADIOLOGI:r,KONSUL:n,ALERGI:o,VITAL_SIGN:u,BANK_DARAH:h,DIAGNOSA:d,SURAT_PERINTAH_MONDOK:l})},1123:(t,e,i)=>{"use strict";i.d(e,{l:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_LABEL_PEMAKAIAN_OBAT,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToDeActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5521:(t,e,i)=>{"use strict";i.d(e,{m:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_METODE_RACIKAN,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7862:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_OUTLET,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToDeActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4452:(t,e,i)=>{"use strict";i.d(e,{j:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_RUTE_PEMBERIAN_OBAT,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutToDeActive(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},917:(t,e,i)=>{"use strict";i.d(e,{I:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_SATUAN_ATURAN_PAKAI,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1344:(t,e,i)=>{"use strict";i.d(e,{f:()=>h});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(3393),u=i(7369);let h=(()=>{class t{constructor(t,e){this.notificationService=t,this.httpOperationService=e,this.API=r.PHARMACY.SETUP_DATA.SETUP_TAMBAHAN_ATURAN_PAKAI,this.dataSource=new a.X([])}setDataSource(){this.onGetAll().subscribe(t=>{this.dataSource.next(t.data)})}onGetAll(){return this.httpOperationService.defaultGetRequest(this.API.GET_ALL)}onPostSave(t){return this.httpOperationService.defaultPostRequest(this.API.INSERT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onPutEdit(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.g),n.LFG(u.d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},266:(t,e,i)=>{"use strict";i.d(e,{O:()=>h});var a=i(8512),s=i(8843),r=i(5366),n=i(3393),o=i(7369),u=i(3762);let h=(()=>{class t{constructor(t,e,i){this.notificationService=t,this.httpOperationService=e,this.pendaftaranPasienBaruService=i,this.API_CONFIG=s.API_DASHBOARD_DOKTER.DAFTAR_PASIEN,this.ActivePasien=new a.X({})}onSetActivePasien(t){const e=JSON.parse(localStorage.getItem("UserData"));t.dpjp=e.full_name,this.pendaftaranPasienBaruService.onGetLinkFotoPerson(t.id_person).subscribe(e=>{t.photo_url=e.data,t.umur=t.usia,t.tgl_admisi=t.jam_masuk},t=>{console.log(t)},()=>{localStorage.setItem("ActivePasien",JSON.stringify(t)),this.ActivePasien.next(t)})}onGetActivePasien(){const t=JSON.parse(localStorage.getItem("ActivePasien"));this.ActivePasien.next(t)}onGetAllDaftarPasienIRJA(t){return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_PASIEN_IRJA_BY_ID_DOKTER+t)}onGetAllDaftarPasienIRNA(t){return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_PASIEN_IRNA_BY_ID_DOKTER+t)}onGetAllDaftarPasienIRDA(t){return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_PASIEN_IRDA_BY_ID_DOKTER+t)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(n.g),r.LFG(o.d),r.LFG(u.P))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1009:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var a=i(8512),s=i(7727),r=i(2696),n=i(5366),o=i(7369),u=i(3393),h=i(266);let d=(()=>{class t{constructor(t,e,i){this.httpOperationService=t,this.notificationService=e,this.daftarPasienService=i,this.API=r.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA,this.dataHistoryResep=new a.X([]),this._dataDetail=new a.X([]),this.dataDetail$=this._dataDetail.asObservable(),this._dataDetailRacikan=new a.X([]),this.dataDetailRacikan$=this._dataDetailRacikan.asObservable(),this.dataObat=new a.X([]),this.dataSourceParentGrid=new a.X([]),this.dataSourceChildGrid=new a.X([]),this.dataSelectRacikan=new a.X({}),this.jumlah_item=0,this.counter=0}get dataDetailRacikan(){return this._dataDetailRacikan.getValue()}set dataDetailRacikan(t){this._dataDetailRacikan.next(t)}get dataDetail(){return this._dataDetail.getValue()}set dataDetail(t){this._dataDetail.next(t)}onInitList(){}onGetAllByResepActiveByRegister(t){return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER+"/1",t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onGetByIdRegisterToTrans(t){return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER+"/"+t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}setDataObat(t){this.onGetAllByParams(t).subscribe(t=>{this.dataObat.next(t.data)})}setDataResep(t){this.onGetAllByRegister(t).subscribe(t=>{this.dataHistoryResep.next(t.data)})}onGetAllByParams(t){return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onGetById(t){return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID+"/"+t)}onGetAllByRegister(t){return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER+"/1",t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}addDetail(t){this.dataDetail=[...this.dataDetail,t],this.sum()}addDetailRacikan(t){this.dataDetailRacikan=[...this.dataDetailRacikan,t]}setDetailRacikan(t){this.dataDetailRacikan=t}editDetail(t,e){this.dataDetail[t]=e,this.sum()}removeDataDetail(t){this.dataDetail.splice(t,1),this.sum()}saveResep(){console.log("parent",this.dataDetail),this.dataSourceChildGrid.subscribe(t=>{console.log(t)})}Insert(t,e,i){let a=0,r=0;return this.dataDetail.map((t,e)=>(t.no_urut=e+1,t.racikans=[],t)),console.log(this.dataSourceChildGrid.value),this.dataSourceChildGrid.value.forEach(t=>{let e=this.dataDetail.map(t=>t.counter).indexOf(t.counter);r=this.dataDetail[e].id_item!=a?0:r,a=this.dataDetail[e].id_item,r++,t.no_urut=r,this.dataDetail[e].racikans.push(t)}),t.details=this.dataDetail,t.jumlah_item=this.jumlah_item,this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP+"/"+e+"/"+i,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}sum(){this.jumlah_item=this.dataDetail.sum("qty_resep")}reset(){this.dataSourceChildGrid.next([]),this.dataDetail=[]}stopResepRawatInap(t){return this.httpOperationService.defaultPutRequestWithoutParams(this.API.UPDATE_TO_STOP+"/"+t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}ubahResepRawatInap(t){let e=0,i=0;return this.dataDetail.map((t,e)=>(t.no_urut=e+1,t.racikans=[],t)),this.dataSourceChildGrid.value.forEach(t=>{let a=this.dataDetail.map(t=>t.counter).indexOf(t.counter);i=this.dataDetail[a].id_item!=e?0:i,e=this.dataDetail[a].id_item,i++,t.no_urut=i,this.dataDetail[a].racikans.push(t)}),t.details=this.dataDetail,t.jumlah_item=this.jumlah_item,this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH+"/0",{resep_id_lama:t.resep_id,resep_baru:t}).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}pulangResepRawatInap(t){let e=0,i=0;return this.dataDetail.map((t,e)=>(t.no_urut=e+1,t.racikans=[],t)),this.dataSourceChildGrid.value.forEach(t=>{let a=this.dataDetail.map(t=>t.counter).indexOf(t.counter);i=this.dataDetail[a].id_item!=e?0:i,e=this.dataDetail[a].id_item,i++,t.no_urut=i,this.dataDetail[a].racikans.push(t)}),t.details=this.dataDetail,t.jumlah_item=this.jumlah_item,this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG+"/0",{resep_id_lama:t.resep_id,resep_baru:t}).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}lanjutakanResepRawatInap(t){return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.d),n.LFG(u.g),n.LFG(h.O))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7085:(t,e,i)=>{"use strict";i.d(e,{f:()=>l});var a=i(8512),s=i(7727),r=i(2696),n=i(8314),o=i(5366),u=i(7369),h=i(3393),d=i(266);let l=(()=>{class t{constructor(t,e,i){this.httpOperationService=t,this.notificationService=e,this.daftarPasienService=i,this.API=r.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA,this.API_PULANG_IRNA=n.BAWA_PULANG,this.dataHistoryResep=new a.X([]),this._dataDetail=new a.X([]),this.dataDetail$=this._dataDetail.asObservable(),this._dataDetailRacikan=new a.X([]),this.dataDetailRacikan$=this._dataDetailRacikan.asObservable(),this.dataObat=new a.X([]),this.dataAntrianIrja=new a.X([]),this.dataSourceParentGrid=new a.X([]),this.dataSourceChildGrid=new a.X([]),this.dataSelectRacikan=new a.X({}),this.jumlah_item=0,this.counter=0}get dataDetailRacikan(){return this._dataDetailRacikan.getValue()}set dataDetailRacikan(t){this._dataDetailRacikan.next(t)}get dataDetail(){return this._dataDetail.getValue()}set dataDetail(t){this._dataDetail.next(t)}generadeNoAntrian(t){return this.httpOperationService.defaultGetRequest(this.API.GENERADE_NO_ANTRIAN+"/"+t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}setDataObat(t){this.onGetAllByParams(t).subscribe(t=>{this.dataObat.next(t.data)})}setDataResep(t){this.onGetAllByRegister(t).subscribe(t=>{this.dataHistoryResep.next(t.data)})}onGetAllByParams(t){return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onGetAllByRegister(t){return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER+"/"+this.daftarPasienService.ActivePasien.value.id_person,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}onGetAntrian(){this.httpOperationService.defaultPostRequestWithoutLoading(this.API.GET_ANTRIAN,[]).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)})).subscribe(t=>{this.dataAntrianIrja.next(t.data)})}onGetById(t){return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID+"/"+t)}addDetail(t){this.dataDetail=[...this.dataDetail,t],this.sum()}addDetailRacikan(t){this.dataDetailRacikan=[...this.dataDetailRacikan,t]}editDetail(t,e){this.dataDetail[t]=e,this.sum()}removeDataDetail(t){this.dataDetail.splice(t,1),this.sum()}saveResep(){console.log("parent",this.dataDetail),console.log("child",this.dataSourceChildGrid.value)}Insert(t,e,i){let a=0,r=0;return this.dataDetail.map((t,e)=>(t.no_urut=e+1,t.racikans=[],t)),this.dataSourceChildGrid.value.forEach(t=>{let e=this.dataDetail.map(t=>t.counter).indexOf(t.counter);r=this.dataDetail[e].id_item!=a?0:r,a=this.dataDetail[e].id_item,r++,t.no_urut=r,this.dataDetail[e].racikans.push(t)}),t.details=this.dataDetail,t.jumlah_item=this.jumlah_item,this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP_IRJA+"/"+e+"/"+i,t).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}Pulang(t,e,i){let a=0,r=0;return this.dataDetail.map((t,e)=>(t.no_urut=e+1,t.racikans=[],t)),this.dataSourceChildGrid.value.forEach(t=>{let e=this.dataDetail.map(t=>t.counter).indexOf(t.counter);r=this.dataDetail[e].id_item!=a?0:r,a=this.dataDetail[e].id_item,r++,t.no_urut=r,this.dataDetail[e].racikans.push(t)}),t.details=this.dataDetail,t.jumlah_item=this.jumlah_item,this.httpOperationService.defaultPutRequest(this.API_PULANG_IRNA+"/"+i,{id_register:t.id_register,resep_baru:t}).pipe((0,s.K)(t=>{this.notificationService.onShowToast(t.statusText,t.status+" "+t.statusText,{},!0)}))}sum(){this.jumlah_item=this.dataDetail.sum("qty_resep")}reset(){this.dataSourceChildGrid.next([]),this.dataDetail=[]}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(u.d),o.LFG(h.g),o.LFG(d.O))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},389:(t,e,i)=>{"use strict";i.d(e,{K:()=>c});var a=i(5366),s=i(1305),r=i(5470),n=i(7369),o=i(3515),u=i(9456);const h=["template"],d=["grid"];function l(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",1),a.TgZ(1,"div",2),a.TgZ(2,"h5",3),a._uU(3),a.qZA(),a.TgZ(4,"button",4),a.NdJ("click",function(){return a.CHM(t),a.oxw().modalRef.hide()}),a.qZA(),a.qZA(),a.TgZ(5,"div",5),a.TgZ(6,"div",6),a.TgZ(7,"div",7),a.TgZ(8,"h5",8),a._uU(9,"Cari :"),a.qZA(),a.qZA(),a.TgZ(10,"div",9),a.TgZ(11,"mol-lock-up-filters",10),a.NdJ("onChangeFilters",function(e){return a.CHM(t),a.oxw().onChangeFilters(e)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(12,"div",6),a.TgZ(13,"div",9),a.TgZ(14,"input",11,12),a.NdJ("keydown.enter",function(){a.CHM(t);const e=a.MAs(15);return a.oxw().onSearchLookup(e.value)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(16,"div",13),a.TgZ(17,"div",7),a.TgZ(18,"mol-grid",14,15),a.NdJ("row-selected",function(e){return a.CHM(t),a.oxw().onRowSelected(e)})("enter-pressed",function(e){return a.CHM(t),a.oxw().onKeyPressed(e)})("double-click",function(e){return a.CHM(t),a.oxw().onDoubleClicked(e)})("initialized",function(e){return a.CHM(t),a.oxw().onInitialized(e)}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=a.oxw();a.s9C("id",t.modalId),a.xp6(3),a.Oqu(t.modalTitle),a.xp6(8),a.Q6J("filters",t.filters),a.xp6(7),a.Q6J("grid-id",t.gridId)("grid-width",t.gridWidth)("grid-height",t.gridHeight)("grid-DataSource",t.gridDataSource)("grid-lines",t.gridLines)("columns",t.columns)("grid-paging",t.gridPaging)("grid-initial-page",t.gridPageSettings)("childGrid",t.childGrid)}}let c=(()=>{class t{constructor(t,e,i){this.modalService=t,this.httpOperationService=e,this.changeDetection=i,this.subscriptions=[],this.staticFilters=[],this.isButtonHidden=!1,this.gridId="GridModal",this.gridWidth="auto",this.gridHeight=300,this.gridLines="Both",this.gridPaging=!0,this.kodeValue="",this.titleValue="",this.onGetSelectedData=new a.vpe,this.openModal=new a.vpe}ngOnInit(){this.gridPageSettings={pageSizes:!0,pageCount:4,pageSize:11},this.childGrid={dataSource:this.gridChildDataSource,queryString:this.queryString,rowHeight:30,allowResizing:!0,allowTextWrap:!0,textWrapSettings:{wrapMode:"Both"},columns:this.columnsChild}}onInitialized(t){this.grid=t}onOpenModal(){const t=(0,s.aj)(this.modalService.onShow,this.modalService.onHidden).subscribe(()=>this.changeDetection.markForCheck());this.subscriptions.push(this.modalService.onShown.subscribe(()=>{setTimeout(()=>{document.getElementById("searchValueId").focus()},100)})),this.subscriptions.push(t),this.modalRef=this.modalService.show(this.template,Object.assign({},{class:"modal-lg"})),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()}),this.subscriptions=[]}onCloseModal(){this.modalRef.hide(),setTimeout(()=>{this.gridDataSource=[]},200)}onFetchDataSource(t){this.httpOperationService.defaultPostRequest(this.lookupUrl,t).subscribe(t=>{this.gridDataSource=t.data,setTimeout(()=>{t.data.length>0&&(this.grid.Grid.selectedRowIndex=0),this.mappingChildGrid()},200)},t=>{console.log(t)})}onChangeFilters(t){this.currentFilters=t}onSearchLookup(t){let e,i;this.currentFilters?(e=this.currentFilters.field,i=this.currentFilters.filter):(e="",i="");let a=[{columnName:e,filter:i,searchText:t,searchText2:""}];if(this.staticFilters.length>0)for(let s=0;s<this.staticFilters.length;s++)a.push(this.staticFilters[s]);this.onFetchDataSource(a)}onRowSelected(t){this.currentData=t.data}onKeyPressed(t){13==t.keyCode&&(t.cancel=!0,this.onKeyPressedUtility(this.currentData))}onKeyPressedUtility(t){this.kodeValue=t[this.idKode],this.titleValue=t[this.idTitle],this.onGetSelectedData.emit(t),this.onCloseModal()}onDoubleClicked(t){this.onKeyPressedUtility(t)}handlePressEnter(t){}resetValue(){this.kodeValue="",this.titleValue="",this.currentData=null}ngOnDestroy(){this.gridDataSource=[]}mappingChildGrid(){this.gridChildDataSource=[],this.gridDataSource.forEach(t=>{this.gridChildDataSource.push(...t.details)}),this.childGrid={dataSource:this.gridChildDataSource,queryString:this.queryString,rowHeight:30,allowResizing:!0,allowTextWrap:!0,textWrapSettings:{wrapMode:"Both"},columns:this.columnsChild}}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.tT),a.Y36(n.d),a.Y36(a.sBO))},t.\u0275cmp=a.Xpm({type:t,selectors:[["org-look-up-hirarki"]],viewQuery:function(t,e){if(1&t&&(a.Gf(h,5),a.Gf(d,5)),2&t){let t;a.iGM(t=a.CRH())&&(e.template=t.first),a.iGM(t=a.CRH())&&(e.grid=t.first)}},inputs:{label:"label",modalId:["modal-id","modalId"],modalTitle:["modal-title","modalTitle"],modalButton:["modal-button","modalButton"],filters:["filter-lookup","filters"],lookupUrl:["lookup-url","lookupUrl"],staticFilters:["static-filter","staticFilters"],isButtonHidden:["hide-button","isButtonHidden"],buttonLookup:["button-id","buttonLookup"],columns:"columns",columnsChild:"columnsChild",sourceGrid:"sourceGrid",queryString:"queryString",idKode:"idKode",idTitle:"idTitle",SelectedInputId:"SelectedInputId"},outputs:{onGetSelectedData:"onGetSelectedData",openModal:"onOpenModal"},decls:2,vars:0,consts:[["template",""],[1,"modal-content","border-0","large-modal-content",3,"id"],[1,"modal-header","py-1","bg-light","text-ungu-tua"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","p-1"],[1,"row","mx-0","my-1"],[1,"col-lg-12","col-md-12","col-sm","12"],[1,"card-title","mb-1"],[1,"col-lg-12","col-md-12","col-sm-12"],[3,"filters","onChangeFilters"],["type","text","id","searchValueId",1,"form-control",3,"keydown.enter"],["searchValueId",""],[1,"row","mx-0","my-2"],[3,"grid-id","grid-width","grid-height","grid-DataSource","grid-lines","columns","grid-paging","grid-initial-page","childGrid","row-selected","enter-pressed","double-click","initialized"],["grid",""]],template:function(t,e){1&t&&a.YNc(0,l,20,12,"ng-template",null,0,a.W1O)},directives:[o.W,u.q],styles:[""]}),t})()},4762:(t,e,i)=>{"use strict";function a(t,e,i,a){return new(i||(i=Promise))(function(s,r){function n(t){try{u(a.next(t))}catch(e){r(e)}}function o(t){try{u(a.throw(t))}catch(e){r(e)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,o)}u((a=a.apply(t,e||[])).next())})}i.d(e,{mG:()=>a})}}]);