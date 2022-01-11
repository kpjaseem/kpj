import { AquaLandingComponent } from './aqua-landing/aqua-landing.component';
import { PgAdminComponent } from './pg-admin/pg-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AquaLandingComponent, data: { breadcrumb: 'AQUA Home' } },
  { path: 'home/pgAdmin', component: PgAdminComponent, data: { breadcrumb: 'PG Admin' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
