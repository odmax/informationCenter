import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {
  feedback=[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllFeedBack();
  }

  // takeRekCompliment()
  // {
  //   return this.userService.getRecogCompliment().subscribe(data=>
  //     this.compliment = data);
  // }

  getAllFeedBack()
  {
    return this.userService.GetFeedBack().subscribe(data=>
      this.feedback = data)
  }
}
