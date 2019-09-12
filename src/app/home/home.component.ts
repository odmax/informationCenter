import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()anonymousData={
     cat_id: 1, message: " "
    
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  anonymousReg(){
    this.userService.getAnonymous(this.anonymousData).subscribe(
      data =>{console.log(data);
      },
      error =>{
        console.log(error);
      })
  }

}
