import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidebarOpen = false;
  isUserInfoOpen = false;
  isCarrierSelectionOpen = false;
  isPgOpen = false;
  isUserPreferenceOpen = false;
  isLogOutOpen = false;
  assignedPgs!: string[];
  selectedCarrier: any;
  carrierOptions = [{}];

  constructor() { }

  ngOnInit(): void {
    this.assignedPgs = ['MRS ASIA TO CARRIB', 'MRS ASIA TO NEUR'];
    this.carrierOptions = [
      { code: 'CMA CGM', carrier: 'cma' },
      { code: 'ANL', carrier: 'anl' },
      { code: 'CNC', carrier: 'cnc' },
    ];
    this.selectedCarrier = { code: 'CMA CGM', carrier: 'cma' }
  }

  toggleSidebar(val: boolean) {
    this.isSidebarOpen = val;
  }

  toggleChevron(val: string) {
    switch (val) {
      case 'userInfo':
        this.isUserInfoOpen = !this.isUserInfoOpen;
        break;
      case 'carrierSelection':
        this.isCarrierSelectionOpen = !this.isCarrierSelectionOpen;
        break;
      case 'pg':
        this.isPgOpen = !this.isPgOpen;
        break;
      case 'preference':
        this.isUserPreferenceOpen = !this.isUserPreferenceOpen;
        break;
      default:
        this.isLogOutOpen = !this.isLogOutOpen;
        break;
    }
  }
}
