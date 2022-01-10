import { RepoService } from './../repo.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  userName!: string;
  password!: string;

  constructor(private repo: RepoService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.onSubmit();
  }

  onSubmit() {
    this.repo.checkUserCredentials(this.userName, this.password);
    if (this.repo.isCredentials) { this.router.navigateByUrl('localhost:4200/home'); }
  }

}
