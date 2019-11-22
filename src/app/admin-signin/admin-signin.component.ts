import { Component, OnInit, Input, ApplicationInitStatus } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router} from '@angular/router';


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
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }


      onNaveButtonClick():void{
        this._router.navigate(['/admin-dashboard'])
      }
  
  ngOnInit() {

  }
loginUser()
{
  
  this.userService.AdminLogIn(this.logINUserData).subscribe(
    Response=>{console.log(Response)},
    err=>{console.error(err);})

    // this._router.navigate(['/admin-dashboard'])
}

}
