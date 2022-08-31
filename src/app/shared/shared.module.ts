import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from '../shared/components/skills/skills.component';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { SocialComponent } from '../shared/components/social/social.component';
import { MaterialModule } from '../shared/material/material.module';
import { CertificateComponent } from './components/certificate/certificate.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    SkillsComponent,
    SocialComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class SharedModule { }
