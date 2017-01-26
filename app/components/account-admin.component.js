"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var account_service_1 = require("../services/account.service");
var account_1 = require("../model/account");
var session_info_1 = require("./session-info");
var AccountAdminComponent = (function () {
    function AccountAdminComponent(_route, _router, _accountService) {
        this._route = _route;
        this._router = _router;
        this._accountService = _accountService;
        this.titulo = "Sistema de Actualización de Datos";
    }
    AccountAdminComponent.prototype.ngOnInit = function () {
        this.account = new account_1.Account("id", "sic", "name", "", "", "", "", "");
        this.getAccount();
        console.log("acount-admin component cargado");
    };
    AccountAdminComponent.prototype.getAccount = function () {
        var _this = this;
        //let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
        //box_restaurantes.style.visibility = "visible";
        this._route.params.forEach(function (params) {
            var id = params["id"];
            var system = params["system"];
            session_info_1.SessionInfo.SessionID = id;
            session_info_1.SessionInfo.System = system;
            _this._accountService.getAccount(id, system)
                .subscribe(function (result) {
                var accounts;
                accounts = result;
                //this.status = result.status;
                _this.account = accounts[0];
                //		if(this.status !== "success"){
                //			alert("Error en el servidor al  consultar cliente");
                //		}
                //	box_restaurantes.style.display = "none";
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage !== null) {
                    console.log(_this.errorMessage);
                    alert("Falla al consultar Cliente" + _this.errorMessage);
                }
            });
        });
    };
    AccountAdminComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    AccountAdminComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    AccountAdminComponent.prototype.onBorrarRestaurante = function (id) {
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
    };
    AccountAdminComponent = __decorate([
        core_1.Component({
            selector: "account-list",
            templateUrl: "app/view/accounts-list.html",
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, account_service_1.AccountService])
    ], AccountAdminComponent);
    return AccountAdminComponent;
}());
exports.AccountAdminComponent = AccountAdminComponent;
//# sourceMappingURL=account-admin.component.js.map