"use strict";
var router_1 = require('@angular/router');
var restaurantes_detail_component_1 = require("./components/restaurantes-detail.component");
var restaurante_add_component_1 = require("./components/restaurante-add.component");
var restaurante_edit_component_1 = require("./components/restaurante-edit.component");
var dashboard_component_1 = require("./components/dashboard.component");
var account_admin_component_1 = require("./components/account-admin.component");
var account_edit_component_1 = require("./components/account-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: "", component: dashboard_component_1.DashboardComponent },
    { path: "restaurante/:id", component: restaurantes_detail_component_1.RestaurantesDetailComponent },
    { path: "crear-restaurante", component: restaurante_add_component_1.RestauranteAddComponent },
    { path: "editar-restaurante/:id", component: restaurante_edit_component_1.RestauranteEditComponent },
    { path: "donde-como-hoy/:random", component: restaurantes_detail_component_1.RestaurantesDetailComponent },
    { path: "actualizar-datos/:system/:id", component: account_admin_component_1.AccountAdminComponent },
    { path: "editar-datos", component: account_edit_component_1.AccountEditComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map