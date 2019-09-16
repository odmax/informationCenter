import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service'
import { Post } from '../Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()anonymousData={
     id: " ", message: " "
    
  }
  @Input()categoryData={
    id: " ", name: " "
  }
  @Input()recogniseData={
    cat_id:" ",name: " ", surname: " ", contact: " ", email: " ", message: " "
   
 }

  constructor(private userService:UserService) { }
  categories:any;

  ngOnInit() {

   
    return this.userService.getCategory().subscribe(response =>
      this.categories =response);

  }
  AnogetCatId(e){
    this.categoryData.id= e.id;
    this.anonymousData.id = this.categoryData.id;
    console.log(this.anonymousData.id);
    console.log(this.anonymousData.message);
  }

  RecgetCatId(e){
    this.categoryData.id= e.id;
    this.recogniseData.cat_id = this.categoryData.id;
    console.log(this.recogniseData.name);
    console.log(this.recogniseData.surname);
    console.log(this.recogniseData.contact);
    console.log(this.recogniseData.email);
    console.log(this.recogniseData.cat_id);
    console.log(this.recogniseData.message);
  }
  anonymousReg(){
    this.userService.PostAnonymous(this.anonymousData).subscribe(
      data =>
      console.log(data)
      );
  }
  recogniseReg()
  {
    this.userService.PostRecognized(this.recogniseData).subscribe(
      data =>
      console.log(data)
    );
  }


}

