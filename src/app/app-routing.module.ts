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
import{RecComplimentComponent} from './rec-compliment/rec-compliment.component';
import { RecComplaintComponent } from './rec-complaint/rec-complaint.component';
import { RecSuggestionComponent } from './rec-suggestion/rec-suggestion.component';
import { AnonComplimentComponent } from './anon-compliment/anon-compliment.component';
import { AnonSuggestionComponent } from './anon-suggestion/anon-suggestion.component';
import { AnonComplaintComponent } from './anon-complaint/anon-complaint.component';
import { AnonymousDashbordComponent } from './anonymous-dashbord/anonymous-dashbord.component';



const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      //{path: 'testing', component: TestingComponent}
    ]
  },

  //no layout routes
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-header', component: AdminHeaderComponent },
  { path: 'admin-sidenav', component: AdminSidenavComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'recognized',component:RecognizedComponent},
  {path: 'anonymous',component:AnonymousComponent},
  {path: 'rec-compliment',component:RecComplimentComponent},
  {path: 'rec-complaint',component:RecComplaintComponent},
  {path: 'rec-suggestion',component:RecSuggestionComponent},
  {path: 'anon-complaint',component:AnonComplaintComponent},
  {path:'anon-compliment',component:AnonComplimentComponent},
  {path:'anon-suggestion',component:AnonSuggestionComponent},
  {path: 'anonymous-dashbord', component:AnonymousDashbordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
