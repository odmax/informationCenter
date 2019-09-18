import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  adminFm: FormGroup;
  
  @Input()adminData={
   username: " ", password: " "
  }


  constructor(private userService:UserService,private router: Router, private adminserv: FormBuilder) { }
  adLog:any;
  

  ngOnInit() {
    // return this.userService.getAdminLogIn().subscribe(response =>
    //   this.adLog =response);
  }

  getAdminLogIn(f)
  {
  this.userService.getAdminLogIn(this.adminData).subscribe(
    data => {
      this.router.navigate(['/'])
    }
  )
  // console.log("success", this.adminData.admin_id);
  // if(this.adminData.username == f.userName){
  //   if(this.adminData.password == f.password){
  //     console.log("login successfull");
  //   }
  // }
  // else{
  //   console.log("You do not have Access");
  // }
  }

}
