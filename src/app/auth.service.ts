import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn:boolean=false;
  login(userName:string, password:string):Observable <any>{
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName=='admin' && password=='admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn? "true":"false");
     
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val=>{
        console.log("Is User Authentication is Successful:"+ val);

      })

    );

  }

  constructor() { }

}
