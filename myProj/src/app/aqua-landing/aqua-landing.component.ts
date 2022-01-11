import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aqua-landing',
  templateUrl: './aqua-landing.component.html',
  styleUrls: ['./aqua-landing.component.scss']
})
export class AquaLandingComponent implements OnInit {

  favoriteList: any;

  constructor(private toast: MessageService) { }

  ngOnInit(): void {
    this.favoriteList = [
      { name: '11596-SPOT-FAL/MEX-DR/RF-ALL', isFavorite: false },
      { name: '11596-SPOT-CIMEX/FAL/MEX-DR/RF-ALL', isFavorite: true },
      { name: '11665-YEAR-RF-1', isFavorite: false },
    ]
  }

  makeFavorite(id: number) {
    this.favoriteList[id].isFavorite = !this.favoriteList[id].isFavorite; 
  }

  onProgressToast() {
    this.toast.clear('onProgress');
    this.toast.add({key: 'onProgress', severity: 'info', summary: 'This page is under construction'});
  }
  
  UnAuthorizedToast() {
    this.toast.clear('onProgress');
    this.toast.add({key: 'onProgress', severity: 'error', summary: 'Not Authorized', sticky: true});

  }

}
