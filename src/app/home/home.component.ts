import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
 verifyForm: FormGroup;
 test=false;
 categoryName:any;
 categoryName1:any;

  constructor(private fb: FormBuilder,
    private userService:UserService) { }
  categories:any;

  ngOnInit() {
  //  this.verifyForm = this.fb.group({
    //  name: [
      //        null, 
        //      [
          //      Validators.required,
            //    Validators.pattern('[a-zA-Z ]*'),
              //  Validators.minLength(3),
                //Validators.maxLength(20)
              //]
      //]
//       ,
//       surname:[
//                 null,
//                 [
//                   Validators.required,
//                   Validators.pattern('[a-zA-Z ]*'),
//                   Validators.minLength(3),
//                   Validators.maxLength(20)
//                 ]
//             ],
//     phoneNumber:[
//               null,
//               [
//                 Validators.required,
//                 Validators.minLength(10),
//                 Validators.maxLength(10),
//                 Validators.pattern("^[0-9]*$")
//               ]
//           ],
//  email:[
//             null,
//             [
//               Validators.required,
//               Validators.email,
//             ]
//         ]

   // });
   
    return this.userService.getCategory().subscribe(response =>
      this.categories = response);
      

  }



  get fm(){
    return this.verifyForm.controls;
  }
  AnogetCatId(e){
    this.categoryData.id= e.id;
    this.anonymousData.id = this.categoryData.id;
    console.log(this.anonymousData.id);
    console.log(this.anonymousData.message);
    this.categoryName=e.name;
    this.test=true;
    console.log(e);
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
    this.categoryName1=e.name;
    this.test=true;
  }
  anonymousReg(){
    this.userService.PostAnonymous(this.anonymousData).subscribe(
      data =>
      console.log(data));

      
  }

  recogniseReg()
  {
    this.userService.PostRecognized(this.recogniseData).subscribe(data =>
    console.log(data));
  }


}

