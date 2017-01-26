import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService{
	constructor(private _http: Http){}

	getRestaurantes(){
		return this._http.get("http://localhost:8080/slim2/public/restaurantes")
							.map(res => res.json());
	}

	getRestaurante(id: string, random = null){
		if(random == null){
			return this._http.get("http://localhost:8080/slim2/public/restaurante/"+id)
							.map(res => res.json());
		}else{
			return this._http.get("http://localhost:8080/slim2/public/random-restaurante")
							.map(res => res.json());
		}
		
	}

	addRestaurante(restaurante: Restaurante) {
		let json = JSON.stringify(restaurante);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post("http://localhost:8080/slim2/public/restaurantes", 
				params, {headers: headers}).map(res => res.json());
	}

	editRestaurante(id: string, restaurante: Restaurante) {
		let json = JSON.stringify(restaurante);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post("http://localhost:8080/slim2/public/update-restaurante/"+id, 
				params, {headers: headers}).map(res => res.json());
	}

	deleteRestaurante(id: string){
		return this._http.get("http://localhost:8080/slim2/public/delete-restaurante/"+id)
							.map(res => res.json());
	}
}