import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  formData:FormGroup;
  un:boolean;
  constructor(private authService:AuthService,private router :Router ) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password:new FormControl(""),
    });
  }
    onClickSubmit(data:any){
      this.userName =data.userName;
      this.password= data.password;
      console.log("Login page:"+this.userName);
      console.log("Login page:"+this.password);

      this.authService.login(this.userName,this.password)
          .subscribe(data=>{
            console.log("Is Login Success:"+ data);
             if(data)
             {
               this.un=false;
               this.router.navigate(['/editEmployee']);
             }
             else{
               this.un=true;
             }
          });
    }
  }




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   title = 'firstprj';
//   companyname ='Cognizant';
//   first : number;
//   second:number;
//   result:number;
//   salval:number;

//   addnumber():any{
//    console.log(this.first);
//    console.log(this.second);
//    this.result=Number(this.first)+Number(this.second);
//    console.log(this.result);
//   }

//   calsal(a:string,b:string):any{
//     this.salval=Number(a)+Number(b);
//   }

//   ngOnInit(): void {
//   }

// }


