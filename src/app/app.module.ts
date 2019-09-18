import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { AdminComplimentsComponent } from './admin-compliments/admin-compliments.component';
import { AdminSuggestionsComponent } from './admin-suggestions/admin-suggestions.component';

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
    AdminComplaintsComponent,
    AdminComplimentsComponent,
    AdminSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
