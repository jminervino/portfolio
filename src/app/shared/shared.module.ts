import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
import { SocialComponent } from '../shared/components/social/social.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreModule } from '../core/core.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { CardSkillsComponent } from './components/skills/card-skills/card-skills.component';
import { CardExperienceComponent } from './components/skills/card-experience/card-experience.component';
import { CardProjectComponent } from './components/projects/card-project/card-project.component';
import { CardProfessionalProjectComponent } from './components/projects/card-professional-project/card-professional-project.component';
import { ProfessionalProjectsExampleComponent } from './components/projects/professional-projects-example/professional-projects-example.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    SkillsComponent,
    SocialComponent,
    CertificateComponent,
    AboutMeComponent,
    ContactComponent,
    CardSkillsComponent,
    CardExperienceComponent,
    CardProjectComponent,
    CardProfessionalProjectComponent,
    ProfessionalProjectsExampleComponent,
  ],
  imports: [CommonModule, FormsModule, MatDialogModule, CoreModule, MatGridListModule, MatCardModule],
  exports: [ProjectsComponent, CertificateComponent, SkillsComponent, AboutMeComponent, ContactComponent, ProfessionalProjectsExampleComponent],
})
export class SharedModule {}
