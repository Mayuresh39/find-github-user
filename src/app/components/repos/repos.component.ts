import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() repoUrl : string;
  public repos = [] 

  constructor(private githubService:GithubService,private changeDetectRef : ChangeDetectorRef) { }

  //detects changes on data-bound properties of this directives.
  //repoUrl is data-bound property in this component
  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe(
       (response : []) => {
          this.repos = response;
          this.changeDetectRef.detectChanges(); 
       },
       (error) =>{
         console.log(error);
       } 
      );
    }
  }

  ngOnInit(): void {


  }

}
