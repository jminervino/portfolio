import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { MyhistoryComponent } from './myhistory/myhistory.component';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule }from '@angular/material/legacy-list';
import { MatLegacyButtonModule as MatButtonModule }from '@angular/material/legacy-button';



@NgModule({ declarations: [AppComponent, HomeComponent, MyhistoryComponent],
    exports: [
        MatSidenavModule,
        MatListModule,
        MatButtonModule
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        CoreModule,
        SharedModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
