import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AccountService} from "../services/account.service";
import {Account} from "../model/account";
import {SessionInfo} from "./session-info";

@Component({
	selector: "account-edit",
	templateUrl: "app/view/accounts-edit.html",
	providers: [AccountService]
})

export class AccountEditComponent implements OnInit {
	public titulo:string = "Actualización de Información de Clientes";
	public account: Account;
	public status: string;
	public errorMessage;


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _accountService: AccountService
	){}

 	ngOnInit() {
 		this.account = new Account("id","sic","name","","","","","");
 		this.getAccount();
		console.log("acount-edit component cargado");
	}

	getAccount(){
		//let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
		//box_restaurantes.style.visibility = "visible";
		this._route.params.forEach((params: Params) => {
			 
			let id = SessionInfo.SessionID;
			
			this._accountService.getAccount(id , SessionInfo.System )
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

	onSubmit(){
     	if(this.account != null && this.account.sic_code != null){
     		this.account.system = SessionInfo.System;
			 this._accountService.editAccount(this.account).subscribe(
					response => {
						this.status = response.status;
						if(!this.status){
							alert("Falla al actualizar datos, comuniquese con el Centro comercial");
						}
					},
					error => {
						this.errorMessage = <any>error;
					
						if(this.errorMessage !== null){
							console.log(this.errorMessage);
							alert("Error en la petición");
						}
					}
				);

			this._router.navigate(["/"]);
		}
	}

	

}