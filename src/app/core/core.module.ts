import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule,  MatSidenavModule,
    MatListModule,
    MatButtonModule, MatIconModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
