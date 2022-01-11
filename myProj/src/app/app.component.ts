import { RepoService } from './repo.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myProj';
  isCredentials = false;
  isHomePageOpen!: boolean;

  constructor(private primengConfig: PrimeNGConfig,
              private repo: RepoService) {}

  ngOnInit() {
    this.repo.isHomePageOpen.subscribe(val => this.isHomePageOpen = val);
    this.primengConfig.ripple = false;
    this.isCredentials = this.repo?.isCredentials;
  }
}
