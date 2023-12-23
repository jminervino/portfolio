import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
import { SocialComponent } from '../shared/components/social/social.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoreModule } from '../core/core.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ProjectsComponent,
    SkillsComponent,
    SocialComponent,
    CertificateComponent,
    AboutMeComponent,

  ],
  imports: [CommonModule, MatDialogModule, CoreModule, MatGridListModule, MatCardModule],
  exports: [ProjectsComponent, CertificateComponent, SkillsComponent, AboutMeComponent],
})
export class SharedModule {}
