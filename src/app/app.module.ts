import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { RecognizedComponent } from './recognized/recognized.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { RecComplimentComponent } from './rec-compliment/rec-compliment.component';
import { RecComplaintComponent } from './rec-complaint/rec-complaint.component';
import { RecSuggestionComponent } from './rec-suggestion/rec-suggestion.component';
import { AnonComplaintComponent } from './anon-complaint/anon-complaint.component';
import { AnonComplimentComponent } from './anon-compliment/anon-compliment.component';
import { AnonSuggestionComponent } from './anon-suggestion/anon-suggestion.component';
import {AnonymousDashbordComponent} from './anonymous-dashbord/anonymous-dashbord.component';
import {TestingComponent} from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminSigninComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    RecognizedComponent,
    AnonymousComponent,
    RecComplimentComponent,
    RecComplaintComponent,
    RecSuggestionComponent,
    AnonComplaintComponent,
    AnonComplimentComponent,
    AnonSuggestionComponent,
    AnonymousDashbordComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
