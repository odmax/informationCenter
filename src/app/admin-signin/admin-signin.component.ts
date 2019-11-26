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

@Input()logINUserData={
  username: "",
  password: "",

}
userId:any;
error:boolean=false;
errorMesage:string="";
dataLoading:boolean=false;
private querySubscription;
logInUser:any;
user:any;


  
  constructor(private userService:UserService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { 

        
            }
  ngOnInit() {

    
  }

  

loginUser()
{
  
  this.userService.AdminLogIn(this.logINUserData).subscribe(
    Response=>{console.log(Response)},
    err=>{console.error(err);})

    this.validateForm()

    
}

validateForm() {
  var x = document.forms["myForm"]["username"].value;
   var y = document.forms["myForm"]["password"].value;
  if (x == "admin" && y == "Admin") {
    alert("success");
    this._router.navigate(['/admin-dashboard']);
    return false;
  }
  else{
    alert("wrong details");

    this._router.navigate(['/admin-signin']);
  }
}


}
