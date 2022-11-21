import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { MyhistoryComponent } from './myhistory/myhistory.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, MyhistoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
