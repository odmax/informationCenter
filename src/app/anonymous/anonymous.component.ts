import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';


// this.router.events.pipe(
//   filter((event:Event) => event instanceof NavigationEnd)
// ).subscribe(x => console.log(x))

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
 message:string;

  

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

  

  search()
  {
    if(this.message != ""){
      
    }else if(this.message == ""){
      this.ngOnInit();
    }
    this.anonymousData.message= this.data.filter(res=>{
      return res.message.toLowerCase().match(this.message.toLowerCase())
    });
  }
}
