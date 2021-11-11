import { environment } from "src/environments/environment";

export const GET_ALL_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/GetAll";
export const GET_BY_ID_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/GetById/";
export const POST_SAVE_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/Insert";
export const DELETE_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/Delete/";
export const PUT_UPDATE_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/Update";
export const PUT_UPDATE_STATUS_ROOM_CATEGORY = `${environment.webApiPis}` + "SetupRoomCategory/UpdateStatus";

export const GET_ALL_ROOM = `${environment.webApiPis}` + "SetupRoom/GetAll";
export const GET_ALL_ROOM_BY_DYNAMIC_FILTER = `${environment.webApiPis}` + "SetupRoom/GetAllByDynamicFilter";
export const GET_BY_ID_ROOM = `${environment.webApiPis}` + "SetupRoom/GetById/";
export const POST_SAVE_ROOM = `${environment.webApiPis}` + "SetupRoom/Insert";
export const DELETE_ROOM = `${environment.webApiPis}` + "SetupRoom/Delete/";
export const PUT_UPDATE_ROOM = `${environment.webApiPis}` + "SetupRoom/Update";
export const PUT_UPDATE_STATUS_ROOM = `${environment.webApiPis}` + "SetupRoom/UpdateStatus";

export const GET_ALL_BED_ROOM = `${environment.webApiPis}` + "SetupBedRoom/GetAll";
export const GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER = `${environment.webApiPis}` + "SetupBedRoom/GetAllByDynamicFilter";
export const GET_BY_ID_BED_ROOM = `${environment.webApiPis}` + "SetupBedRoom/GetById/";
export const POST_SAVE_BED_ROOM = `${environment.webApiPis}` + "SetupBedRoom/Insert";
export const PUT_UPDATE_BED_ROOM = `${environment.webApiPis}` + "SetupBedRoom/Update";
export const PUT_UPDATE_STATUS_ACTIVE_BED_ROOM = `${environment.webApiPis}` + "SetupBedRoom/UpdateStatus";
export const PUT_UPDATE_STATUS_BED = `${environment.webApiPis}` + "SetupBedRoom/UpdateStatusBed";
export const PUT_UPDATE_STATUS_BED_KE_OK = `${environment.webApiPis}` + "SetupBedRoom/UpdateStatusBedToOK";
export const PUT_UPDATE_STATUS_BED_KE_TO = `${environment.webApiPis}` + "SetupBedRoom/UpdateStatusBedToTO";

export const GET_ALL_STATUS_BED_ROOM = `${environment.webApiPis}` + "SetupStatusBed/GetAll";
export const GET_BY_ID_STATUS_BED_ROOM = `${environment.webApiPis}` + "SetupStatusBed/GetById/";
export const POST_SAVE_STATUS_BED_ROOM = `${environment.webApiPis}` + "SetupStatusBed/Insert";
export const PUT_UPDATE_BED_ROOM_STATUS = `${environment.webApiPis}` + "SetupStatusBed/Update";
export const DELETE_BED_ROOM_STATUS = `${environment.webApiPis}` + "SetupStatusBed/Delete/";
