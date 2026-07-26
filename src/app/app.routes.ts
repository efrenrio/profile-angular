import { Routes } from '@angular/router';

import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'work-experiences', component: WorkExperiencesComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'support', component: SupportComponent },
  { path: '**', redirectTo: 'overview' }
];
