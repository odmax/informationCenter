import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {RecognizedComponent} from './recognized/recognized.component';
import {AnonymousComponent} from './anonymous/anonymous.component';




const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },

  //no layout routes
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-header', component: AdminHeaderComponent },
  { path: 'admin-sidenav', component: AdminSidenavComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'recognized',component:RecognizedComponent},
  {path: 'anonymous',component:AnonymousComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
