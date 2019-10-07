import { Component, OnInit, Input } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  @Input()anonymousData={
    id: " ", message: " "
   
 }
  @Input()categoryData={
    id: " ", name: " "
  }
  
  Recognized:[];
  constructor(private userService:UserService) { }

test =false;
categories:any;
categoryName:any;


  ngOnInit() {
    
    return this.userService.getCategory().subscribe(response =>
      this.categories =response);
  }

  AnogetCatId(e){
    this.categoryData.id= e.id;
    this.anonymousData.id = this.categoryData.id;
    console.log(this.anonymousData.id);
    console.log(this.anonymousData.message);
    this.categoryName=e.name;
    this.test=true;
    console.log(e);
  }

}
