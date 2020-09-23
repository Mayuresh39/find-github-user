import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,private toastr:ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm : NgForm){
    const {email,password} = signUpForm.form.value;

    this.auth.signUp(email,password).then(
      (response) =>{
        this.router.navigateByUrl('/')
        this.toastr.success("Welcome!");
      })
      .catch((error)=>{
        console.log(error.message);
        this.toastr.error("Failed to register!");
      })
  }

}
