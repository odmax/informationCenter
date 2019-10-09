import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { AdminComplimentsComponent } from './admin-compliments/admin-compliments.component';
import { AdminSuggestionsComponent } from './admin-suggestions/admin-suggestions.component';
import { TestingComponent} from './testing/testing.component';



const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      {path: 'testing', component: TestingComponent}
    ]
  },

  //no layout routes
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-header', component: AdminHeaderComponent },
  { path: 'admin-sidenav', component: AdminSidenavComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-complaints', component: AdminComplaintsComponent },
  { path: 'admin-compliments', component: AdminComplimentsComponent },
  { path: 'admin-suggestions', component: AdminSuggestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
