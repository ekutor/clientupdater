"use strict";
var Account = (function () {
    function Account(id, name, sic_code, date_entered, phone_fax, phone_office, cumpleano_c, genero_c, ballots) {
        if (ballots === void 0) { ballots = null; }
        this.id = id;
        this.name = name;
        this.sic_code = sic_code;
        this.date_entered = date_entered;
        this.phone_fax = phone_fax;
        this.phone_office = phone_office;
        this.cumpleano_c = cumpleano_c;
        this.genero_c = genero_c;
        this.ballots = ballots;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map