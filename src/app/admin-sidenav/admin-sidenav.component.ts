import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {
  Admin: any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAdmin();
  }
  

  getAdmin()
  {
    return this.userService.getAdmin().subscribe(res =>{
      this.Admin=res;
      console.log(this.Admin)
    })
  }

 w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
}
