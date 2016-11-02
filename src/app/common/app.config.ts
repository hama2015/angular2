/**
 * Created by zhao on 2016/11/2.
 */
export class Config {
    static swpModeldId(modeleId:any): any {
     //  return modeleId;//systemjs加载
       return "P_"+modeleId;//systemjs加载
    }
}