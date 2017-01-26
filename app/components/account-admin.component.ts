import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AccountService} from "../services/account.service";
import {Account} from "../model/account";
import {SessionInfo} from "./session-info";

@Component({
	selector: "account-list",
	templateUrl: "app/view/accounts-list.html",
	providers: [AccountService]
})

export class AccountAdminComponent implements OnInit {
	public titulo:string = "Sistema de Actualización de Datos";
	public account: Account;
	public status: string;
	public errorMessage;
	public confirmado;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _accountService: AccountService
	){}

 	ngOnInit() {
 		this.account = new Account("id","sic","name","","","","","");
 		this.getAccount();
		console.log("acount-admin component cargado");
	}

	getAccount(){
		//let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
		//box_restaurantes.style.visibility = "visible";
		this._route.params.forEach((params: Params) => {
			 
			let id = params["id"];
			let system = params["system"];
			SessionInfo.SessionID = id;
			SessionInfo.System = system;
			this._accountService.getAccount(id, system )
									.subscribe(
										result => {
												let accounts: Account[];
												accounts = result;
												//this.status = result.status;
												this.account = accounts[0];

										//		if(this.status !== "success"){
										//			alert("Error en el servidor al  consultar cliente");
										//		}

											//	box_restaurantes.style.display = "none";
										},
										error => {
											this.errorMessage = <any>error;
											
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
												alert("Falla al consultar Cliente" + this.errorMessage);
											}
										}
									);
		});
		
	}

	onBorrarConfirm(id){
		this.confirmado = id;
	}

	onCancelarConfirm(id){
		this.confirmado = null;
	}

	onBorrarRestaurante(id){
		/*	this._accountService.deleteRestaurante(id)
						.subscribe(
							result => {
									this.status = result.status;

									if(this.status !== "success"){
										alert("Error en el servidor");
									}
									this.getRestaurantes();

							},
							error => {
								this.errorMessage = <any>error;
								
								if(this.errorMessage !== null){
									console.log(this.errorMessage);
									alert("Error en la petición");
								}
							}
						);*/
	}

}