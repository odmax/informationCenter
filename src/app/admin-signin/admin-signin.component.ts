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

@Input() logINUserData={
  username: "",
  password: ""
}
  
  constructor(private userService:UserService) { }

  
  ngOnInit() {

  }
loginUser()
{
  this.userService.AdminLogIn(this.logINUserData).subscribe(
    Response=>console.log(Response),
    err=>console.error(err)
  )
}

}
