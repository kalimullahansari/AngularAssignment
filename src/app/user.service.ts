import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from './user';
import {BackendService} from './backend.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private backendService:BackendService) { }
  getUsers():Observable<User[]>{
    return this.backendService.getUsers();
  }

  addUser(newUser:User):Observable<boolean>{
    return this.backendService.addUser(newUser);
  }

  authenticateUser(contactNumber:string,password:string):Observable<boolean>{
    return this.backendService.authenticateUser(contactNumber,password);
  }

  isLoggedIn():Observable<boolean>{
    return this.backendService.isLoggedIn();
  }
  logout():Observable<boolean>{
    return this.backendService.logout();
  }

  getCurrentUser(): Observable<User>{
      return this.backendService.getCurrentUser();
  }
  updateUser(newUserInfo:User):Observable<boolean>{
      return this.backendService.updateUser(newUserInfo);
  }
}
