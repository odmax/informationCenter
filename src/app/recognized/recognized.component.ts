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
  @Input()feedBackData={
    anony_reply: " ",recognized_reply: " ",category_id: " "
  }
  test: boolean;

  constructor(private userService:UserService) { }

  Recognized=[];
  categories:any;
  catName:any;
  ngOnInit() {
    
    return this.userService.getRecognized().subscribe(response=>
      this.Recognized = response);
  }


      categoryrec(e)
      {
        this.categoryData.id= e.id;
        this.feedBackData.category_id = this.categoryData.id;
        this.catName = e.name;
        this.test=true;
        console.log(e);
      }


}
