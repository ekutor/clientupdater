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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getAccount = function (sic, system) {
        var json = "{	\"sic_code\":\"" + sic + "\",	\"system\":\"" + system + "\"}";
        var params = JSON.parse(json);
        var people$ = this.http
            .post("http://servicios.iatech.com.co/index.php/account", params, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
        return people$;
    };
    AccountService.prototype.editAccount = function (account) {
        var json = JSON.stringify(account);
        var params = json;
        // let params = JSON.parse(json);
        var people$ = this.http
            .post("http://servicios.iatech.com.co/index.php/account-edit", params, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
        return people$;
    };
    AccountService.prototype.toAccount = function (r) {
        var person = ({
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
    };
    AccountService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map