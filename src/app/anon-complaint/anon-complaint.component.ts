import { Component, OnInit } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anon-complaint',
  templateUrl: './anon-complaint.component.html',
  styleUrls: ['./anon-complaint.component.css']
})
export class AnonComplaintComponent implements OnInit {

  constructor(private userService:UserService) { }

  test=false;
 complaints=[];

  ngOnInit() {
    this.takeAllAnonComplaint();
  }

  takeAllAnonComplaint()
  {
    return this.userService.getAnonymComplaint().subscribe(response =>
     this.complaints = response);
      
  }

}
