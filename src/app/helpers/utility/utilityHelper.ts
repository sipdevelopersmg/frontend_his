// export function removeInfo(Data:any,key:any[]){
//     key.forEach(e => {
//         delete Data[e];
//     });
//     return Data;
// }

export default class utilityHelper{
    public removeInfo(Data:any,key:any[]){
        key.forEach(e => {
            delete Data[e];
        });
        return Data;
    }
}