/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxZxingModule } from '../src/public_api';

@Component({
    selector: 'app-playground',
    template: `<ngx-zxing></ngx-zxing>`
})
class AppComponent { }

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, NgxZxingModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
