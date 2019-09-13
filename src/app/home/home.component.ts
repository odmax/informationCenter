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
     cat_id: " ", message: " "
    
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
      this.categories =response.data);

    
  }

  anonymousReg(){
    this.userService.getAnonymous(this.anonymousData).subscribe(
      data =>{console.log(data);
      },
      error =>{
        console.log(error);
      })
  }

  getCatId(e){
    this.cat_id=e;
    console.log(e.id);
  }
}
