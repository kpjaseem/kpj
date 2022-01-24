import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-info',
  templateUrl: './pg-info.component.html',
  styleUrls: ['./pg-info.component.scss']
})
export class PgInfoComponent implements OnInit {

  @Input() selectedPg: any;

  pgScope: any;
  gol: any;
  pgScopeOption: any;
  golOption: any = [];
  spotPg = true;
  countrySidebar = false;
  operationType!: string;

  constructor() { }

  ngOnInit(): void {
    this.pgScopeOption = [
      {zol: 'a', zod: 'A', isNeeded: true},
      {zol: 'b', zod: 'B'},
      {zol: 'c', zod: 'C'},
      {zol: 'd', zod: 'D'},
    ];
    this.selectedPg?.gol.forEach((ele: any) => {
      const obj = { gol: ele };
      this.golOption.push(obj);
    })
  }

}
