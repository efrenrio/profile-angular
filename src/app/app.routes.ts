import { Routes } from '@angular/router';

import { EducationComponent } from './education/education.component';
import { OverviewComponent } from './overview/overview.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'work-experiences', component: WorkExperiencesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: '**', redirectTo: 'overview' }
];
