import { Component, OnInit, Input } from '@angular/core';
import{UserService} from 'src/app/user.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  @Input()feedBackData={
     anony_reply: " ",recognized_reply: " ",category_id: " "
  }
 
  @Input()categoryData={
    id: " ", name: " "
  }
  categoryName: any;
  test=false;
  categories: any;
  Recognized: any;

 
  
  constructor(private userService:UserService) { }
  Anonymous:any;

  ngOnInit() {
    
    this.getCategory();
    this.getAnom();
  }

  feedBack()
  {
    this.userService.PostFeedback(this.feedBackData).subscribe(data=>
      console.log(data));
  }
  getAnom()
  {
    return this.userService.getAnonymous().subscribe(response =>{
      this.Anonymous = response;
      console.log(this.Anonymous)
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
