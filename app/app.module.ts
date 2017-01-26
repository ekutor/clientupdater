import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';


import {RestaurantesDetailComponent} from "./components/restaurantes-detail.component";
import {RestauranteAddComponent} from "./components/restaurante-add.component";
import {RestauranteEditComponent} from "./components/restaurante-edit.component";

import {DashboardComponent} from "./components/dashboard.component";
import {AccountAdminComponent} from "./components/account-admin.component";
import {AccountEditComponent} from "./components/account-edit.component";
 
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing , JsonpModule],
  declarations: [ 
  				  AppComponent,
  				  DashboardComponent,
  				  RestaurantesDetailComponent,
  				  RestauranteEditComponent,
  				  RestauranteAddComponent,
            AccountAdminComponent,
            AccountEditComponent
  				],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
