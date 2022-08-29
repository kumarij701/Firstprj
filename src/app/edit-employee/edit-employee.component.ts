import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 User:User[];
 userobj:User;
  constructor(private userser:UserService) {
    this.User= this.userser.GetUsers();
   }
   username:Text;
   userid:number;
   isuser:boolean;
   dor:Date;

  ngOnInit(): void {
    
  }

  AddnewUser(u:User):void{
    this.userser.AddNewUser(u);
  }

}
