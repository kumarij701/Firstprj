import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
userdetails:User[];
userobj:User = {userid:0, username:"",contactno:"",userpwd:"",dor:new Date()};
  constructor(private userser:UserService) { 
    this.userobj=this.userser.userobj;
  }

  ngOnInit(): void {
  }
  
  AddnewUser(u:User):void{
    this.userser.AddNewUser(u);
  }

}
