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

  constructor(private userService:UserService) { }
  objPost:Post;
  categories:any;
  cat_id:any;
  ngOnInit() {

   
    return this.userService.getCategory().subscribe(response =>
      this.categories =response);

  }
  getCatId(e){
    this.categoryData.id= e.id;
    this.anonymousData.id = this.categoryData.id;
    console.log(this.anonymousData.id);
    console.log(this.anonymousData.message);
  }

  anonymousReg(){
    this.userService.PostAnonymous(this.anonymousData).subscribe(
      data =>
      console.log(data)
      );
  }


}

