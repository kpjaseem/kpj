import { RepoService } from './../repo.service';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

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
  countryTree: TreeNode[] = [];
  selectedCountry: TreeNode[] = [];

  constructor(private readonly repo: RepoService) { }

  ngOnInit(): void {
    this.getTreeData();
    this.pgScopeOption = [
      {zol: 'HONG KONG SOUTH CHINA', zod: 'ECCA + CARIBBEAN', isNeeded: true},
      {zol: 'HONG KONG SOUTH CHINA', zod: 'GUYANAS NORTH BRAZIL'},
      {zol: 'HONG KONG SOUTH CHINA', zod: 'LEEWARD'},
      {zol: 'HONG KONG SOUTH CHINA', zod: 'MEXICO EAST COAST'},
    ];
  }
  
  golSuggestion() {
    this.golOption = [];
    this.selectedPg?.gol.forEach((ele: any) => {
      const obj = { gol: ele };
      this.golOption.push(obj);
    })
  }

  getTreeData() {
    this.repo.getCountryTree().subscribe({
      next: (ele: any) => {
        this.countryTree = ele;
      }, error: () => null
    });
  }

}
