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
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      usrName:['',[Validators.required]],
      usrEmail:['',[Validators.required]],
      usrPwd:['',[Validators.required]]
    });
  }
  

  errorMsg:String = null;
  registerUser(){
    this.service.registerUser(this.registerForm.value).subscribe((result)=>{
      this.router.navigateByUrl('/department')
      localStorage.setItem('email',this.registerForm.value.usrEmail);
      // console.log(localStorage.getItem('email'));
    },(error)=>{
      console.log(error);
      this.errorMsg =error.error.message;
    })
  }
}
