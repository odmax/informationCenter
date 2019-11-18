import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
