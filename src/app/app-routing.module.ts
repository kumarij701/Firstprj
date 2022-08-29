import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminGuard } from './admin.guard';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { PlayerComponent } from './player/player.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'Login',
   component:LoginComponent},
  {path:'Register',
    component:RegisterComponent},
    {path:'User',
    component:UserComponent},
    {path:'adduser',
    component:AddUserComponent},
    {path:'edituser/:id',
    component:EdituserComponent},
    {path:'editEmployee',
     component:EditEmployeeComponent, canActivate:[AdminGuard]},
     {path:'Player',
    component:PlayerComponent},
    {path:'Player-data',
    component:PlayerDataComponent}
     
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
