import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-rec-suggestion',
  templateUrl: './rec-suggestion.component.html',
  styleUrls: ['./rec-suggestion.component.css']
})
export class RecSuggestionComponent implements OnInit {


  constructor(private userService:UserService) { }
  suggestion=[];
  test=false;


  ngOnInit() {
    this.takeAllSuggestion();
  }

  takeAllSuggestion()
  {
    return this.userService.getRecogSuggestion().subscribe(data=>
     this.suggestion = data);
  }
}
