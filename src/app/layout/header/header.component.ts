import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public email : string = null;

  constructor(private auth:AuthService,private toastr:ToastrService,private route:Router) {
    this.auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
   }

  ngOnInit(): void { 
  }

  async doSignOut  ()  {
    try{
      const res = await this.auth.signOut();
      this.route.navigateByUrl('/signin');
      this.toastr.warning('Login again to continue!')
      this.email = null ;
    }
    catch(error){
      this.toastr.error('Failed to logout');
    }
  }



}
