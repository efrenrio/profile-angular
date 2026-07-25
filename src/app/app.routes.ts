import { Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';
import { OverviewComponent } from './overview.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { SupportComponent } from './support.component';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'support', component: SupportComponent },
  { path: '**', redirectTo: 'overview' }
];
