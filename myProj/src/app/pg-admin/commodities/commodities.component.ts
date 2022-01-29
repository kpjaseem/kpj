import { RepoService } from './../../repo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  @Input() selectedPg: any;

  pgAdminCommodities: any[] = [];
  chevronDownTooltip = [];
  isHistoryOpen = false;
  isCommodityOpen = false;
  history: any[] = [];
  commodityMultiSelectSuggestion: any[] = [];
  selectedCommodities: any;

  constructor(private readonly repo: RepoService) { }

  ngOnInit(): void {
    this.getPgAdminCommodities();
    this.repo.changeCommodity.subscribe((changeCommodity: boolean) => {
      if (changeCommodity) { this.getPgAdminCommodities(); }
    })
  }

  getPgAdminCommodities() {
    this.repo.getPgAdminCommodities().subscribe({
      next: (data: any) => {
        this.pgAdminCommodities = data.filter((ele: any) => ele?.pgId === this.selectedPg?.pgId);
      }, error: () => null
    })
  }

  assignChevronDownTooltip(subCommodity: any[]) {
    let joinedSubCommodity = '';
    subCommodity.forEach(ele => {
      joinedSubCommodity += ele + '\n';
    })
    return joinedSubCommodity;
  }

  openHistory() {
    this.isHistoryOpen = true;
    this.repo.getGopHistory().subscribe({
      next: (ele: any) => {
        this.history = ele;
      }, error: () => null
    })
  }

}
