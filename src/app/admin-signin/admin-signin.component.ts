import { Component, OnInit, Input, ApplicationInitStatus } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})

export class AdminSigninComponent implements OnInit {

// @Input()logINUserData={
//  this.loginForm.value.username,
//   password: "",

// }


loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


  
  constructor(private userService:UserService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { 

        
            }
  ngOnInit() {
this.loginForm = this.formBuilder.group({
  username:['',[Validators.required]],
  password:[' ']
})
    
  }

  

loginUser()
{
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
}
  
  this.userService.AdminLogIn(this.loginForm.value.username, this.loginForm.value.password).subscribe(
    Response=>{
    if(Response.code == 200)
    {
      this._router.navigate(['/admin-dashboard']);
    }else{
      this._router.navigate(['/admin-signin']);
      this.loading = false;
    }

    console.log(Response.code)},
    err=>{console.error(err);})


    
}

}
