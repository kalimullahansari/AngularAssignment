import { Component, OnInit ,Input,Output, EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import {User} from '../user';
import { Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {UserService} from '../user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit,OnChanges {
  @Output() formSubmitEvent = new EventEmitter<User>();
  @Input() user?:User;
  isUpdate: boolean = false;
  response?:boolean;
  errors?:string;
  userForm = this.fb.group({
    name: ['',Validators.required],
    contactNumber: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['',[Validators.required,Validators.minLength(5)]],
    role:['',[Validators.required]],
    address: this.fb.group({
      state: ['',Validators.required],
      district:['',Validators.required]
    })
  });

  get name(){
    return this.userForm.get('name');
  }

  get contactNumber(){
    return this.userForm.get('contactNumber');
  }

  get password(){
    return this.userForm.get('password');
  }


  get role(){
    return this.userForm.get('role');
  }

  get state(){
    return this.userForm.get('address')?.get('state');
  }

  get district(){
    return this.userForm.get('address')?.get('district');
  }

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    if(this.router.url=="/profile") {
      // this.userForm.controls['contactNumber'].disable();
      this.isUpdate=true;
    }
    
  }

  ngOnChanges(changes: SimpleChanges):void{
    this.user = changes['user'].currentValue;
    if(this.user)
      this.userForm.setValue(this.user);
  }

  onSubmit(): void{
    this.formSubmitEvent.emit(this.userForm.value);
  }
}
