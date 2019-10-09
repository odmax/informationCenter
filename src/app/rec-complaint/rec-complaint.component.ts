import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-rec-complaint',
  templateUrl: './rec-complaint.component.html',
  styleUrls: ['./rec-complaint.component.css']
})
export class RecComplaintComponent implements OnInit {
  constructor(private userService:UserService) { }
  test=false;
  complaints=[];
  
  ngOnInit() {
    this.takeAllcomplaints();

  }
  takeAllcomplaints()
  {
    return this.userService.getRecogComplaint().subscribe(data=>
    this.complaints = data);
  }

}
