import { Injectable } from '@angular/core';
import { User } from 'src/Models/User';
//import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users:User[]=[
    {userid:111, username:"FirstPerson",contactno:"9998",userpwd:"blah",dor:new Date("2020/02/12")},
    {userid:112, username:"SecondPerson",contactno:"7484",userpwd:"blah2",dor:new Date("2020/01/20")},
    {userid:113, username:"ThirdPerson",contactno:"9875",userpwd:"blah3",dor:new Date("2020/05/6")}

  ]
  userobj:User={userid:0, username:"",contactno:"",userpwd:"",dor:new Date()};

  GetUsers():User[]
  {
    return this.users;
  }

  GetEmpById(id:number):User{
    return this.users.find(x=>x.userid==id);
  }

  AddNewUser(obj:User):void{
    this.users.push(obj);
    console.log("User Added!");
  }

  RemoveUser(id:number):void{
    this.userobj=this.users.find(x=>x.userid==id);
    this.users.pop();
    console.log("user deleted!");
  }
}
