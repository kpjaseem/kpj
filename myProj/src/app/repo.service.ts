import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  isCredentials = false;

  constructor() { }

  checkUserCredentials(username: string, password: string) {
    this.isCredentials = Boolean(username === 'jas' && password === '123');
  }
}
