import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anonymous-dashbord',
  templateUrl: './anonymous-dashbord.component.html',
  styleUrls: ['./anonymous-dashbord.component.css']
})
export class AnonymousDashbordComponent implements OnInit {


  @Input()anonymousData={
    id: " ", message: " "
   
 }
 @Input()categoryData={
   id: " ", name: " "
 }
  constructor(private userService:UserService) { }
  categories:any;
  test=false;
  categoryName:any;
  categoryName1:any;
  Anonymous=[];
  complaints=[];
  compliment=[];
  suggestion=[];

  
  ngOnInit() {
  
    this.getAllAnony();  
    this.takeAnonycomplaints();
    this.takeAnonyCompliment();
    this.takeAnonySuggestion();
       
      }
      takeAnogetCatId(e){
        this.categoryData.id= e.id;
        this.anonymousData.id = this.categoryData.id;
        console.log(this.anonymousData.id);
        console.log(this.anonymousData.message);
        this.categoryName=e.name;
        this.test=true;
        console.log(e);
      }
    

  
      getAllAnony()
      {
        return this.userService.getAnonymous().subscribe(response=>
          this.Anonymous = response);
      }
  
      takeAnonycomplaints()
      {
        return this.userService.getAnonymComplaint().subscribe(data=>
        this.complaints = data);
      }
      takeAnonyCompliment()
      {
        return this.userService.getAnonymCompliment().subscribe(data=>
          this.compliment = data);
      }
     takeAnonySuggestion()
     {
       return this.userService.getAnonymSuggestion().subscribe(data=>
        this.suggestion = data);
     }
  }

