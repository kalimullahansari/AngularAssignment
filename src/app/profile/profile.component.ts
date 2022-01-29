import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user?:User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let self = this;
    this.userService.getCurrentUser().
      subscribe(response=>{
        self.user = response;
      });
  }

  updateUser(user:User):void{
    let self = this;
    this.userService.updateUser(user).subscribe(
      response=> {
        self.user = user;
        alert("profile updated");
      }
    )
  }
}
