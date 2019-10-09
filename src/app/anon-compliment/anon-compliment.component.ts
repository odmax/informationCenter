import { Component, OnInit } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anon-compliment',
  templateUrl: './anon-compliment.component.html',
  styleUrls: ['./anon-compliment.component.css']
})
export class AnonComplimentComponent implements OnInit {

  constructor(private userService:UserService) { }
  test=false;
  anonCompliment=[];
 
   ngOnInit() {
     this.takeAllAnonCompliment();
   }
 
   takeAllAnonCompliment()
   {
     return this.userService.getAnonymComplaint().subscribe(response =>
      this.anonCompliment = response);
       
   }
}
