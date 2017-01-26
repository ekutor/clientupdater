import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {SessionInfo} from "./components/session-info";
 
@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html"
})
 
export class AppComponent{
	public title:string = "Sistema de Actualizacion de Datos ";
	public company:string = "Pactia";

    constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	callSession(){
		let session = SessionInfo.SessionID;
		let system = SessionInfo.System;
		this._router.navigate(["/actualizar-datos", system ,session]);
	}
}
