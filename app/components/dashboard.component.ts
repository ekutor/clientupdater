import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AccountService} from "../services/account.service";
import {Account} from "../model/account";

@Component({
	selector: "dashboard",
	templateUrl: "app/view/dashboard.html",
	providers: [AccountService]
})

export class DashboardComponent implements OnInit {
	public titulo:string = "Menu principal";
	public account: Account;
	

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _accountService: AccountService
	){}

 	ngOnInit() {
 		this.getAccount();
		console.log("dashboard component cargado");
	}

	getAccount(){
		
		
	}


}