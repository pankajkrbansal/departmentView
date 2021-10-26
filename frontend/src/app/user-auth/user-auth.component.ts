import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewServiceService } from '../view-service.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(private service:ViewServiceService, private fb:FormBuilder,private router:Router) { }
  registerForm : FormGroup
  loginForm:FormGroup
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      usrName:['',[Validators.required]],
      usrEmail:['',[Validators.required]],
      usrPwd:['',[Validators.required]]
    });
    this.loginForm = this.fb.group({
      // usrName:['',[Validators.required]],
      usrEmail:['',[Validators.required]],
      usrPwd:['',[Validators.required]]
    });
  }
  

  errorMsg:String = null;
  isUser:Boolean = false;
  registerUser(){
    this.service.registerUser(this.registerForm.value).subscribe((result)=>{
      // this.router.navigateByUrl('/department')
      localStorage.setItem('email',this.registerForm.value.usrEmail);
      localStorage.setItem('pwd',this.registerForm.value.usrPwd);
      this.isUser = true;
      // console.log(localStorage.getItem('email'));
    },(error)=>{
      console.log(error);
      this.errorMsg =error.error.message;
    })
  }
  displayLogin(){
    this.isUser = true;
  }
  loginUser(){
    this.service.loginUser(this.loginForm.value).subscribe((response)=>{
      if(localStorage.getItem('email')==this.loginForm.value.usrEmail && localStorage.getItem('pwd')== this.loginForm.value.usrPwd){
        this.router.navigateByUrl('/department');
      }
    },(erorr)=>{

    })
  }
}
