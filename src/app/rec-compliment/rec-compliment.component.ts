import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-rec-compliment',
  templateUrl: './rec-compliment.component.html',
  styleUrls: ['./rec-compliment.component.css']
})
export class RecComplimentComponent implements OnInit {

  constructor(private userService:UserService) { }
  compliment=[];
  test=false;

  ngOnInit() {
    this.takeAllCompliment();
  }
  takeAllCompliment()
  {
    return this.userService.getRecogCompliment().subscribe(data=>
      this.compliment = data);
  }
}
