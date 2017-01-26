import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {RestaurantesDetailComponent} from "./components/restaurantes-detail.component";
import {RestauranteAddComponent} from "./components/restaurante-add.component";
import {RestauranteEditComponent} from "./components/restaurante-edit.component";

import {DashboardComponent} from "./components/dashboard.component";
import {AccountAdminComponent} from "./components/account-admin.component";
import {AccountEditComponent} from "./components/account-edit.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "", component: DashboardComponent},
	{path: "restaurante/:id", component: RestaurantesDetailComponent},
	{path: "crear-restaurante", component: RestauranteAddComponent},
	{path: "editar-restaurante/:id", component: RestauranteEditComponent},
	{path: "donde-como-hoy/:random", component: RestaurantesDetailComponent},
	{path: "actualizar-datos/:system/:id", component: AccountAdminComponent},
	{path: "editar-datos", component: AccountEditComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);