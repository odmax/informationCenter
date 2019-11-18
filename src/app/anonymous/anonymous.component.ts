import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subject } from 'rxjs';

// declare const myFunction:any;

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  

  @Input()categoryData = {
    id: " ", name: " "
  }

  @Input()feedBackData = {
    anony_reply:" ", message: " ", id: " "
  }
  @Input()anonymousData={
    id: " ", message: " "
   
 }

  categoryName: any;
  test = false;
  categories: any;
  // filterData: any={};
  data: any;
  data$ = new Subject<any>();
  search:any;


  

  constructor(private userService: UserService) { }
  Anonymous: any;

  ngOnInit() {

    this.getCategory();
    this.getAnom();
  }

  feedBack()
  {
    this.userService.PostFeedback(this.feedBackData).subscribe(data=>{

      console.log(this.feedBackData)
    })
  }

  

  getAnom() {
    return this.userService.getAnonymous().subscribe(response => {
      this.Anonymous = response;
      console.log(this.Anonymous)
    })

  }

  getCategory() {
    return this.userService.getCategory().subscribe(response => {
      this.categories = response;
      console.log(response)
    })

  }

  getCat(cat) {
    this.feedBackData = cat;

  }

  anomGetdetails(e){
    this.categoryData.id= e.id;
    this.anonymousData.id = this.feedBackData.id;
    console.log(this.anonymousData.id);
    console.log(this.anonymousData.message);
    this.categoryName=e.name;
    this.test=true;
    console.log(e);
  }

  // keypress(){
  //   myFunction();
  // }

  // search(term: string) {
  //   if(!term) {
  //     this.filterData = this.data;
  //   } else {
  //     this.filterData = this.data.filter(x => 
  //        x.name.trim().toLowerCase().includes(term.trim().toLowerCase())
  //     );
  //   }
  // }

  
  filter(search) {
    this.data$.next(this.data.filter(_ => _.message.includes(search)));
  }

  
}
