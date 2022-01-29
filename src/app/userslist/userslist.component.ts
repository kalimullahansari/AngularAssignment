import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users: User[] = [];
  constructor(private userService:  UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
      this.userService.getUsers().subscribe(users=> this.users=users);
  }
}
