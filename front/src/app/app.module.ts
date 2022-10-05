import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

import {FormsModule} from "@angular/forms";
import {RestaurantTableComponent} from "./components/restaurant-table/restaurant-table.component";
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantTableComponent,
    RestaurantComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
