// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    webApiUrl: "http://174.138.22.139",
    firebaseRtdbUrl: "https://dashboard-template-2708-default-rtdb.asia-southeast1.firebasedatabase.app/",
    api: "http://68.183.180.59:2022/api/",
    webApiDo: "http://174.138.22.139:5001/api/",
    webApiMM: "http://174.138.22.139:5001/api/",

    /** 
     * @webApiPis http://174.138.22.139:8888/api/pis/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pis 
    */
    webApiPis: "http://174.138.22.139:8888/api/pis/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
