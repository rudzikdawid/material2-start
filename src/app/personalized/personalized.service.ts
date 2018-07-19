import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PersonalizedService {
  constructor() {
    console.warn('PersonalizedService constructor');
  }

  themeStream = new BehaviorSubject('dark-blue');
}
