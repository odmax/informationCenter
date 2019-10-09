import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-recognized',
  templateUrl: './recognized.component.html',
  styleUrls: ['./recognized.component.css']
})
export class RecognizedComponent implements OnInit {

  constructor(private userService:UserService) { }

  Recognized=[];

  ngOnInit() {
    this.getAllRac(); 
  }
  
  getAllRac()
      {
        return this.userService.getRecognized().subscribe(response=>
          this.Recognized = response);
      }


}
