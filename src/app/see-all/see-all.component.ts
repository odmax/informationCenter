import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {

  constructor(private userServise:UserService) { }
  annonymous:any;




  ngOnInit() {

    this.userServise.getAnonymous().subscribe(response => 
      this.annonymous = response);
  }

}
