import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm : NgForm){
    const {email,password} = signUpForm.form.value;

    this.auth.signIn(email,password).then(
      (response) =>{
        this.router.navigateByUrl('/')
        this.toastr.success("Welcome!");
      })
      .catch((error)=>{
        console.log(error.message);
        this.toastr.error("Failed to Login!");
      })
  }  
}
