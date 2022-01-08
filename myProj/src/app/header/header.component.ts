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

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(val: boolean) {
    this.isSidebarOpen = val;
  }

  toggleChevron(val: boolean[]) {
    if (val[0]) {
      this.isUserInfoOpen = !this.isUserInfoOpen;
    } else if (val[1]) {
      this.isCarrierSelectionOpen = !this.isCarrierSelectionOpen;
    } else if (val[2]) {
      this.isPgOpen = !this.isPgOpen;
    } else if (val[3]) {
      this.isUserPreferenceOpen = !this.isUserPreferenceOpen;
    } else {
      this.isLogOutOpen = !this.isLogOutOpen;
    }
  }

}
