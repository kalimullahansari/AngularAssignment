import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private userService:UserService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addUser(user:User):void{
    let self =this;
    this.userService.addUser(user).subscribe(response=>{
      if(response) self.router.navigate(['users']);
      else alert("Contact Number Already Taken");
    });
  }
}
