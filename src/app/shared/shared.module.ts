import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
import { SocialComponent } from '../shared/components/social/social.component';
import { CertificateComponent } from './components/certificate/certificate.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    SkillsComponent,
    SocialComponent,
    CertificateComponent,
  ],
  imports: [CommonModule, MatDialogModule],
  exports: [ProjectsComponent, CertificateComponent, SkillsComponent],
})
export class SharedModule {}
