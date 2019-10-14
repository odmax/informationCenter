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
        if (this.categoryData.id ="1")
        {
          this.categoryData.id=this.catName;
          this.catName= "Compliment";

          if(this.categoryData.id ="2")
          {
            this.categoryData.id=this.catName;
            this.catName= "Complaint";

          if(this.categoryData.id ="3")
          {
            this.categoryData.id=this.catName;
            this.catName= "Suggestion";
          }
          }
        }

      }


}
