import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  isCredentials = false;
  isHomePageOpen = new BehaviorSubject<boolean>(true);
  isChargeOpen: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  checkUserCredentials(username: string, password: string) {
    this.isCredentials = Boolean(username === 'jas' && password === '123');
  }
}
