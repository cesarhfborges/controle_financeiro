import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from 'primeng/ripple';
import {NgxGaugeModule} from "ngx-gauge";
import {NgxElectronModule} from "ngx-electron";
import {SharedModule} from "./shared/shared.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxElectronModule,
    RippleModule,
    NgxGaugeModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
