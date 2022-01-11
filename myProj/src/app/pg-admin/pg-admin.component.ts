import { PrimeNGConfig } from 'primeng/api';
import { RepoService } from './../repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-admin',
  templateUrl: './pg-admin.component.html',
  styleUrls: ['./pg-admin.component.scss']
})
export class PgAdminComponent implements OnInit {

  assignedPgs!: any;
  selectedPg!: string;

  constructor(
    private repo: RepoService,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = false;
    this.assignedPgs = ['ACSA (UPA)TEST', 'BALTIC EXPORT HO (UPA)TEST','MRS ASIA TO CARIB/MANAUS-ALL', 'MRS-NEUR TO ASIA-ALL'];
  }

}
