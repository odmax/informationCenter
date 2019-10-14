import { Component, OnInit, Input } from '@angular/core';
import{UserService} from 'src/app/user.service';

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

  feedBack()
  {
    this.userService.PostFeedback(this.feedBackData).subscribe(data=>
      console.log(data));
  }

  // sendAnomRes(e)
  // {
  //   this.categoryData.id= e.id;
  //   this.feedBackData.category_id = this.categoryData.id;
  //   console.log(this.feedBackData.category_id);
  //   console.log(this.feedBackData.anony_reply);
  //   this.categoryName=e.name;
  //   this.test=true;
  //   console.log(e);
  // }



}
