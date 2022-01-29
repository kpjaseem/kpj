import { TreeNode } from 'primeng/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { gopArray } from './pg-admin/pgAdmin';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  isCredentials = false;
  isHomePageOpen = new BehaviorSubject<boolean>(true);
  isChargeOpen: Subject<boolean> = new Subject<boolean>();
  changeCommodity = new BehaviorSubject<boolean>(false);

  constructor(private readonly http: HttpClient) { }

  checkUserCredentials(username: string, password: string) {
    this.isCredentials = Boolean(username === 'jas' && password === '123');
  }

  getGopArray(): Observable<gopArray[]> {
    return this.http.get<gopArray[]>('assets/data/gopArray.json');
  }

  getGopHistory(): Observable<any> {
    return this.http.get<any>('assets/data/gopHistory.json');
  }

  getCountries(): Observable<any> {
    return this.http.get<any>('assets/data/countries.json');
  }

  getCountryTree(): Observable<TreeNode[]> {
    return this.http.get<TreeNode[]>('assets/data/countryTree.json');
  }

  getPgAdminCommodities(): Observable<any> {
    return this.http.get<any>('assets/data/commodities.json');
  }
}
