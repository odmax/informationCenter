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

}


