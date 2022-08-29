import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//   Users:User[]=[
//     {userid:101,username:"qwer",userpwd:"blah",contactno:"2322"},
//     {userid:102,username:"hrgd",userpwd:"blah1",contactno:"9475"},
//     {userid:103,username:"lcid",userpwd:"blah2",contactno:"9384"}
//   ]
//  userobj:User={userid:100,username:"kumari",userpwd:"abc",contactno:"83987"}
//   constructor() {
//     this.userobj.userid=101;
//     this.userobj.username="Jyoti";
//     this.userobj.userpwd="";
//     this.userobj.contactno="9893849534";
//     //this.userobj.dor=Date("2/4/21");
//    }
   users:User[];
   userobj:User= {userid:0, username:"",contactno:"",userpwd:"",dor:new Date()};
constructor(private userser: UserService) {
   
}
  ngOnInit(): void {
    //this.userser.GetUsers();
  }

  displayUsers(){
    this.users=this.userser.GetUsers();
    //return this.users;
  }
   
}
