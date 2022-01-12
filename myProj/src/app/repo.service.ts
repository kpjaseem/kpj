import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { gopArray } from './pg-admin/pgAdimn';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  isCredentials = false;
  isHomePageOpen = new BehaviorSubject<boolean>(true);
  isChargeOpen: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly http: HttpClient) { }

  checkUserCredentials(username: string, password: string) {
    this.isCredentials = Boolean(username === 'jas' && password === '123');
  }

  getGopArray(): Observable<gopArray[]> {
    return this.http.get<gopArray[]>('assets/data/gopArray.json');
  }
}
