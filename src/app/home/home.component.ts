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
     cat_id: 1, message: " "
    
  }

  constructor(private userService:UserService) { }
  objPost:Post;
  ngOnInit() {

    var opost = new Post()
    {
      opost.body='testbody';
      opost.title='testtitle';
      opost.userId=5;

      this.userService.post(opost)
      .subscribe
      (
        data=>
        {
          this.objPost = data;
        }
      )
    }

    
  }

  anonymousReg(){
    this.userService.getAnonymous(this.anonymousData).subscribe(
      data =>{console.log(data);
      },
      error =>{
        console.log(error);
      })
  }

  
}
