import { Component, OnInit, Input } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  constructor(private userService:UserService) { }
  Anonymous:[];

  ngOnInit() {
    
    this.getAllANonyMous();
  }
  getAllANonyMous()
  {
    return this.userService.getAnonymous().subscribe(response =>
     this.Anonymous = response);
      
  }


}
