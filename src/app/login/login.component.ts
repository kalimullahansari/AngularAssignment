import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms' ;
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output()
  // loginEventSuccessfull:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  loginForm:FormGroup = new FormGroup({
    contactNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required]),
  });
  constructor(private router:Router,private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    let self = this;
    this.userService.isLoggedIn().
      subscribe(response=>{
        if(response) self.router.navigate(['profile']);
      });
  }

  onSubmit(): void{
    let self =this;
    this.userService.authenticateUser(
      this.loginForm.value.contactNumber,this.loginForm.value.password).
      subscribe(response=>{
        if(response) {
          window.location.href = 'profile';
          // // self.loginEventSuccessfull.emit(true);
          // self.router.navigate(['profile']);
        }
        else alert('invalid credential');
      });
  }
}
