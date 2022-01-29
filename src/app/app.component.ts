import { Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private userService:UserService,private router:Router,private route: ActivatedRoute){}
  title = 'assignment';
  isLoggedIn:boolean = false;
  ngOnInit():void{
      let self = this;
      this.userService.isLoggedIn().subscribe(
          response=>{
            if(response) self.isLoggedIn = true;
          }
      )
  }

  logout():void{
    this.userService.logout().subscribe(response=>{
      if(response) window.location.href = 'login';
    })
  }
}
