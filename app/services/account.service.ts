import {Injectable} from "@angular/core";
import {Http, Response, Headers ,RequestOptions, JsonpModule, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Account} from "../model/account";
import {ServerResponse} from "../model/response";

@Injectable()
export class AccountService{
	constructor(private http: Http){}
	getAccount(sic: string, system:string):Observable<Account[]>{
		let json = "{	\"sic_code\":\""+sic+"\",	\"system\":\""+system+"\"}"
		let params = JSON.parse(json);
		let people$ = this.http
      .post("http://servicios.iatech.com.co/index.php/account", params, {headers: this.getHeaders()})
      .map(res => res.json());
      return people$;
    }

    editAccount(account:Account):Observable<ServerResponse>{
      let json = JSON.stringify(account);
      let params = json;

     // let params = JSON.parse(json);
      let people$ = this.http
        .post("http://servicios.iatech.com.co/index.php/account-edit", params, {headers: this.getHeaders()})
        .map(res => res.json());
        return people$;
    }


    private toAccount(r:any): Account{
    let person = <Account>({
    id: r.id,
    sic_code: r.sic_code,
    name: r.name,
    date_entered: r.date_entered,
    phone_fax: r.phone_fax,
    phone_office: r.phone_office,
    cumpleano_c: r.cumpleano_c,
    genero_c: r.genero_c
  });
  console.log('Parsed person:', person);
  return person;
   }

    private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}