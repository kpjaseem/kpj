import { RepoService } from './../repo.service';
import { Component, OnInit } from '@angular/core';
import { gopArray } from './pgAdimn';

@Component({
  selector: 'app-pg-admin',
  templateUrl: './pg-admin.component.html',
  styleUrls: ['./pg-admin.component.scss']
})
export class PgAdminComponent implements OnInit {

  assignedPgs!: any;
  selectedPg: any;
  loadingGopArray!: gopArray[];
  dischargeGopArray!: gopArray[];
  isTabOpen = [true, false, false];
  isHistoryOpen = false;
  history: any;

  constructor(
    private repo: RepoService
    ) {  }

  ngOnInit(): void {
    this.selectedPg = { pgId: 11418, name: 'ACSA (UPA)TEST' };
    this.assignedPgs = [
      { pgId: 11418, name: 'ACSA (UPA)TEST' },
      { pgId: 11448, name: 'BALTIC EXPORT HO (UPA)TEST' },
      { pgId: 11596, name: 'MRS ASIA TO CARIB/MANAUS-ALL' },
      { pgId: 11665, name: 'MRS-NEUR TO ASIA-ALL' }
    ];
    this.getGopArray(this.selectedPg.pgId);
  }

  changeTab(event: any) {
    switch (event?.index) {
      case 0: this.isTabOpen = [true, false, false];break;
      case 1: this.isTabOpen = [false, true, false];break;
      case 2: this.isTabOpen = [false, false, true];break;
    }
  }
  
  getGopArray(pgId: number) {
    this.repo.getGopArray().subscribe((gop: gopArray[]) => {
      this.loadingGopArray = gop.filter(ele => ele.groupOfPortType === 'LOADING' && ele.pricingGroupId === pgId);
      this.dischargeGopArray = gop.filter(ele => ele.groupOfPortType === 'DISCHARGE' && ele.pricingGroupId === pgId);
    });
  }

  getGopHistory(gopType: string) {
    this.isHistoryOpen = true;
    this.repo.getGopHistory().subscribe(data => {
      this.history = data.filter((ele: any) => ele.gopType === gopType);
    })
  }

}
