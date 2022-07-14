
// export const webApiDemo = "http://128.199.236.81";

// export const webApiUrl = "http://174.138.22.139";

export const apiUrl = window["env"]["apiUrl"];

// export const modeDevelopment = false;

// export const webApi = modeDevelopment ? webApiUrl : webApiDemo;
export const webApi = apiUrl;

export const isFormularium = false;

export const environment = {

    production: true,

    version: 'DEV',

    // ** Web Api 
    webApiForSentry: `${apiUrl}:8888/api`,

    /** 
     * @webApiMM http://174.138.22.139:8888/api/pharmm/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pharmm 
    */
    webApiMM: `${apiUrl}:8888/api/pharmm/`,

    /** 
     * @webApiPHARMACY http://174.138.22.139:8888/api/farmasi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /farmasi 
    */
    webApiPHARMACY: `${apiUrl}:8888/api/farmasi/`,

    /** 
     * @webApiPis http://174.138.22.139:8888/api/pis/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pis 
    */
    webApiPis: `${apiUrl}:8888/api/pis/`,

    /** 
     * @webApiBilling http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiBilling: `${apiUrl}:8888/api/billing/`,

    /** 
     * @webApiAdmisi http://174.138.22.139:8888/api/admisi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /admisi 
    */
    webApiAdmisi: `${apiUrl}:8888/api/admisi/`,

    /** 
     * @webApiLaporan http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiLaporan: `${apiUrl}:8080/jasperserver/rest_v2/reports/`,

    /** 
        * @webApiSocket http://174.138.22.139:3000
    */
    webApiSocket: `${apiUrl}:3000`,
};
