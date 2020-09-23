import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any = null;
  public userName : string;
  public error = null;

  constructor(private gitService:GithubService,private changeDetectService:ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  search = () => {
    this.gitService.getUserDetails(this.userName).subscribe(
      (response) => {
        this.user = response;
        this.error = null;
        this.changeDetectService.detectChanges();
      },
      (error) => {
        this.error = "User Not found";
        this.user = null;
        this.changeDetectService.detectChanges();
      }
    )
  }





}
