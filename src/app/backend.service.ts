import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  addUser(newUser:User): Observable<boolean> {
      let users:User[] =  JSON.parse(localStorage.getItem('users')||'[]');
      if(this.isContactNumberAlreadyExist(newUser,users)) return of(false);
      users.push(newUser);
      localStorage.setItem('users',JSON.stringify(users));
      return of(true);
  }

  getUsers():Observable<User[]>{
    return of(this.getUsersWithOutObservable());
  }

  getUsersWithOutObservable():User[]{
    return JSON.parse(localStorage.getItem('users')||'[]')
  }

  logout():Observable<boolean>{
    localStorage.removeItem('currentUser');
    return of(true);
  }

  isLoggedIn():Observable<boolean>{
    if(localStorage.getItem('currentUser')) return of(true);
    else return of(false);
  }
  authenticateUser(contactNumber:string,password:string):Observable<boolean>{
    let users:User[] = this.getUsersWithOutObservable();
    for(let user of users){
      if(user.contactNumber == contactNumber && 
          user.password==password) {
        localStorage.setItem('currentUser',JSON.stringify(user));
        return of(true);
      }
    }
    return of(false);
  }


  isContactNumberAlreadyExist(newUser:User,users:User[]):boolean{
    for(let user of users) if(user.contactNumber==newUser.contactNumber) return true;
    return false;
  }

  getCurrentUser(): Observable<User>{
    return of(this.getCurrentUserWithoutObservable());
  }

  getCurrentUserWithoutObservable():User{
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
  updateUser(newUserInfo:User) :Observable<boolean>{
    let users:User[] = this.getUsersWithOutObservable();
    let currentUser = this.getCurrentUserWithoutObservable();
    debugger;
    for(let i=0;i<users.length;i++){
      if(currentUser.contactNumber==users[i].contactNumber){
          users[i] = newUserInfo;
          localStorage.setItem('users',JSON.stringify(users));
          localStorage.setItem('currentUser',JSON.stringify(newUserInfo));
          break;
      }
    }
    return of(true);
  }
}



