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
    email: " ", password: " ", admin_id: " "
  }
  constructor(private userService: UserService, private router: Router, private adminserv: FormBuilder) { }
  private adLog:any;
  ngOnInit() {
    this.adminForm = this.adminserv.group({
      email: [
              null, 
              [
                Validators.required,
              
                Validators.required
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

}


  // AdminLogIn(f) {
  //   this.submitted = true;
  //   if (this.adminForm.invalid) {
  //     return;
  //   }
  
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
    /*
      if(this.adminForm.controls.email.value == 'sam@gmail.com' && this.adminForm.controls.password.value == '123') {
          this.router.navigate(['./admin-dashboard']);
      }else {
        this.invalidLogin = true;
      }
    */
  

