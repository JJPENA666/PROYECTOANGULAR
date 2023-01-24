import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoFoundComponent } from '../app/noFoundPages/no-found/no-found.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from "./shared/shared.module";
import { PagesModuleModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        NoFoundComponent,
        PagesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModuleModule,
        SharedModule,
        AuthModule,
        HttpClientModule
    ]
})
export class AppModule { }
