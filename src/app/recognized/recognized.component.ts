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

  Recognized:any;
  categories:any;
  catName:any;
  ngOnInit() {
    this.getRec();
    this.getCategory();
    
  }

    getRec()
    {
      return this.userService.getRecognized().subscribe(response =>{
        this.Recognized = response;
        console.log(this.Recognized)
      })
        
    }

    getCategory()
    {
      return this.userService.getCategory().subscribe(response => {
        this.categories = response;
        console.log(response)
      })
      
    }

    


}
