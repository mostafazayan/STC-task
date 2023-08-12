import { AdminRoleGuard } from './guards/admin-role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { UserRoleGuard } from './guards/user-role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin-panel',
    canActivate: [AuthGuardGuard, AdminRoleGuard],
    component: AdminPanelComponent
  },
  {
    path: 'user-panel',
    canActivate: [AuthGuardGuard, UserRoleGuard],
    component: UserPanelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
