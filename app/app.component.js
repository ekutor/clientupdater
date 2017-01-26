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
var session_info_1 = require("./components/session-info");
var AppComponent = (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = "Sistema de Actualizacion de Datos ";
        this.company = "Pactia";
    }
    AppComponent.prototype.callSession = function () {
        var session = session_info_1.SessionInfo.SessionID;
        var system = session_info_1.SessionInfo.System;
        this._router.navigate(["/actualizar-datos", system, session]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "mi-app",
            templateUrl: "app/view/home.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map