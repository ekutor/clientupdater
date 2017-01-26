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
var DashboardComponent = (function () {
    function DashboardComponent(_route, _router, _accountService) {
        this._route = _route;
        this._router = _router;
        this._accountService = _accountService;
        this.titulo = "Menu principal";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAccount();
        console.log("dashboard component cargado");
    };
    DashboardComponent.prototype.getAccount = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            templateUrl: "app/view/dashboard.html",
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, account_service_1.AccountService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map