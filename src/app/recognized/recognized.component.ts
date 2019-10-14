import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-recognized',
  templateUrl: './recognized.component.html',
  styleUrls: ['./recognized.component.css']
})
export class RecognizedComponent implements OnInit {

  @Input()categoryData={
    id: " ", name: " "
  }

  constructor(private userService:UserService) { }

  Recognized=[];
  catName:any;
  ngOnInit() {
    this.getAllRac(); 
  }

  getAllRac()
      {
        return this.userService.getRecognized().subscribe(response=>
          this.Recognized = response);
      }

      category()
      {
       
      }


}
