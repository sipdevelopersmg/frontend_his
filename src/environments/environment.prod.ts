
export const webApiDemo = "http://128.199.133.137:8888";

export const webApiUrl = "http://174.138.22.139:8888";

export const webApiHostname = "http://gateway_api:80";

export const modeDevelopment = true;

export const webApi = modeDevelopment ? webApiHostname : webApiDemo;

export const environment = {
    production: true,

    // Web Api Lama
    webApiDo: "http://174.138.22.139:5001/api/",

    /** 
     * @webApiMM http://174.138.22.139:8888/api/pharmm/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pharmm 
    */
    webApiMM: `${webApi}/api/pharmm/`,

    /** 
     * @webApiPHARMACY http://174.138.22.139:8888/api/farmasi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /farmasi 
    */
    webApiPHARMACY: `${webApi}/api/farmasi/`,

    /** 
     * @webApiPis http://174.138.22.139:8888/api/pis/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pis 
    */
    webApiPis: `${webApi}/api/pis/`,

    /** 
     * @webApiBilling http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiBilling: `${webApi}/api/billing/`,

    /** 
     * @webApiAdmisi http://174.138.22.139:8888/api/admisi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /admisi 
    */
    webApiAdmisi: `${webApi}/api/admisi/`,

    /** 
     * @webApiLaporan http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiLaporan: `${webApi}/jasperserver/rest_v2/reports/`,

    /** 
        * @webApiSocket http://174.138.22.139:3000
    */
    webApiSocket: `${webApi}:3000`,
};
