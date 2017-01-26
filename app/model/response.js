"use strict";
var ServerResponse = (function () {
    function ServerResponse(system, id, response, status) {
        this.system = system;
        this.id = id;
        this.response = response;
        this.status = status;
    }
    return ServerResponse;
}());
exports.ServerResponse = ServerResponse;
//# sourceMappingURL=response.js.map