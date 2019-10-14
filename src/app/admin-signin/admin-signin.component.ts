import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router'


@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})

export class AdminSigninComponent implements OnInit {

  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  @Input() adminData = {
    username: " ", password: " ", admin_id: " "
  }
  constructor(private userService: UserService, private router: Router, private adminserv: FormBuilder) { }
  private adLog:any;
  ngOnInit() {
    this.adminForm = this.adminserv.group({
      email: [
              null, 
              [
                Validators.required,
              
              ]
      ],
      password:[
                null,
                [
                Validators.required
                ]
            ]
    });
  }
  AdminLogIn() {
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
  
    /*
     this.auth = authService;
     authService.isLoggedIn().subscribe(
      status => {
        if(status == false) {
          this.user = null;
        } else {
          this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
          })
        }
      }
      )
     
   
    //this.authenticationService.login(this.f.username.value, this.f.password.value)
    this.userService.getAdminLogIn().subscribe(
      invalidLogin=>{
        if(invalidLogin == false){
          this.invalidLogin = true;
        }
        else{
          this.router.navigate(['./admin-dashboard']);
        }
      }
    );
    */
      if(this.adminForm.controls.email.value == this.adminData.username && this.adminForm.controls.password.value == this.adminData.password) {
          this.router.navigate(['./admin-dashboard']);
      }else {
        this.invalidLogin = true;
      }
    
  }
}
/*
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  adminFm: FormGroup;

  @Input() adminData = {
    username: " ", password: " ", admin_id: " "
  }
  constructor(private userService: UserService, private router: Router, private adminserv: FormBuilder) { }
  adLog: any;

  ngOnInit() {
  }
  AdminLogIn(f) {
    // this.adminData.admin_id= f.admin_id;
    // console.log("success", this.adminData.admin_id);
    if (this.adminData.username == f.userName && this.adminData.password == f.password) {
      this.userService.getAdminLogIn();
      console.log("login successfull");
    }
    else {
      console.log("You do not have Access");
    }
  }
}
*/

