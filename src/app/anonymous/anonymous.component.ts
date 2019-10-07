import { Component, OnInit } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {


  Recognized:[];
  constructor(private userService:UserService) { }
test =false;


  ngOnInit() {
    return this.userService.getAnonymComplaint().subscribe(response=>
      this.Recognized = response);
      return this.userService.getAnonymCompliment().subscribe(response=>
        this.Recognized = response);
        return this.userService.getAnonymSuggestion().subscribe(response=>
          this.Recognized = response);     
  }



}
