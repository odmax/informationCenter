import { Component, OnInit, Input, ApplicationInitStatus } from '@angular/core';
import { UserService } from 'src/app/user.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})

export class AdminSigninComponent implements OnInit {

adminForm: FormGroup;
loading=false;
submitted=false;
errors:string;
admin:' ';
returnUrl:any;
admin_pass:' ';
invalidLogin: boolean = false;




 email: " "; password: " "; admin_id: " ";
  
  constructor(
    private userService: UserService, 
    private router: Router, 
    private adminserv: FormBuilder) { }

  private adLog:any;
  ngOnInit() {
    this.adminForm = this.adminserv.group({
   email: [
              null, 
              [
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

  get fm()
  {
    return this.adminForm.controls;
  }


  onSubmit()
  {
    this.submitted = true;

    if (this.adminForm.invalid) {
      return;
  }

  this.loading=true;
     this.userService.AdminLogIn(this.email, this.password)
     .pipe(first())
     .subscribe(
         data => {
             this.router.navigate(['./admin-dashboard']);
         },
         errors => {
             this.errors = errors;
             this.loading = false;
         });
     // invalidLogin=>{
       // if(invalidLogin == false){
        //  this.invalidLogin = true;
       // }

    
       // else{
        //   this.router.navigate(['./admin-dashboard']);
      //  }
     // }
   // );
    

  }

  
  
    //this.userService.getAdminLogIn().subscribe(
      //invalidLogin=>{
        //if(invalidLogin == false){
          //this.invalidLogin = true;
        //}
        //else{
          // this.router.navigate(['./admin-dashboard']);
        //}
      //}
    //);
  
 // }
}
