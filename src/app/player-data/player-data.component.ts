import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserStory } from 'src/Models/UserStory';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  
  //Array to store the player objects.
  UserStorys:UserStory[]=[];

  //Player object to be used in forms.
  UserStory:UserStory={
  userStoryId : 0,
  userStoryName:	"",
  storyOwner	:"",
  storyPoints:0,
  storyDescription:""
  };
  
  //Other required variables.
  msg:string="";
  u_msg:string="";
  d_msg:string="";
  e_msg:string="";

  flag_get:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;

  update_id:number=0;
  delete_id:number=0;

  //Injecting Player service inside this component.
  constructor(private obj:PlayerService)
  {
  }

  ngOnInit(): void {
  }
  
  get_api():void
  {
    this.obj.getAllUsers().subscribe(data=>{
      this.UserStorys=data;
      //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.UserStorys);
    });
  }

  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(data=>{
    this.msg="Successfully created "+data.userStoryName;
    //Logging the response received from web api.
    console.log(data);
    })
  }

  put_api(id:number,data:any):void
  {
    this.obj.updateUser(id,data).subscribe(data=>{
      this.u_msg="Successfully updated player with jersey "+id;
      console.log(data);
    })
   

  }

  delete_api(id:number):void
  {
    this.obj.deleteUser(id).subscribe(data=>{
      this.d_msg="Successfully deleted player with jersey "+id;
      console.log(data);
    })
    
  }

  error_api():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=true;

    this.obj.register().subscribe((data)=>{
    console.log(data);
    },
    (error)=>{
    this.e_msg=error;
    }
    );
  }

  btn_post():void
  {
    this.flag_get=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=false;
  }
  
  btn_put():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_delete=false;
    this.flag_register=false;
  }

  btn_delete():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=true;
    this.flag_register=false;
  }

}
