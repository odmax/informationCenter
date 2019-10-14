import { Component, OnInit } from '@angular/core';
import{UserService} from 'src/app/user.service';

@Component({
  selector: 'app-anon-suggestion',
  templateUrl: './anon-suggestion.component.html',
  styleUrls: ['./anon-suggestion.component.css']
})
export class AnonSuggestionComponent implements OnInit {

  constructor(private userService:UserService) { }
  test=false;
  suggestion=[];

  ngOnInit() {
    this.takeAllAnonySuggestion();
  }

  takeAllAnonySuggestion()
  {
    return this.userService.getAnonymSuggestion().subscribe(data =>
     this.suggestion = data);
      
  }
}
