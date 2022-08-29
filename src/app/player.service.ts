import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStory } from 'src/Models/UserStory';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class PlayerService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7119/api/Product/GetUserStory";
  req1:string="https://localhost:7119/api/Product";

  
  //Method to get the list of all players from the API.
  getAllUsers():Observable<UserStory[]>
  {
    return this.http.get<UserStory[]>(this.req);
  }

  //Method  to create a new player.
  createUser(UserStory:UserStory):Observable<UserStory>
  {
    return this.http.post<UserStory>(this.req1+"/AddProduct",UserStory,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  //Method to update an existing player.
  updateUser(id:number,player:UserStory):Observable<any>
  {
    
    return this.http.put<any>("https://localhost:7119/api/Product/AddProduct",player,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  //Method to delete an existing player.
  deleteUser(id:number):Observable<any>
  {
    return this.http.delete<any>(this.req1+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method to test error handling.
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:7119/api/Product/GetUserStorys')
           .pipe(catchError(this.manageError));
  }
  

  //Method to handle errors.
  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }

}


