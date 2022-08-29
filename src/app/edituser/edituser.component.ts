import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userobj:User;
  constructor(private userser:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=+this.route.snapshot.params['id'];
    this.userobj=this.userser.GetEmpById(id);
    console.log(this.userobj);
  }

}
