import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
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
  isUserPreferenceOpen = false;
  assignedPgs!: string[];
  selectedCarrier: any;
  carrierOptions = [{}];
  currentRoute!: any;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => this.currentRoute = event);
  }

  ngOnInit(): void {
    this.assignedPgs = ['ACSA (UPA)TEST', 'BALTIC EXPORT HO (UPA)TEST','MRS ASIA TO CARIB/MANAUS-ALL', 'MRS-NEUR TO ASIA-ALL'];
    this.carrierOptions = [
      { code: 'CMA CGM', carrier: 'cma', link: 'https://www.cma-cgm.com/' },
      { code: 'ANL', carrier: 'anl', link: 'https://www.anl.com.au/' },
      { code: 'CNC', carrier: 'cnc', link: 'https://www.cnc-ebusiness.com/' },
    ];
    this.selectedCarrier = { code: 'CMA CGM', carrier: 'cma', link: 'https://www.cma-cgm.com/' }
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
      case 'preference':
        this.isUserPreferenceOpen = !this.isUserPreferenceOpen;
        break;
    }
  }
}
