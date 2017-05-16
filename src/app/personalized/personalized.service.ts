import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class PersonalizedService {
  constructor() {
    console.warn('PersonalizedService constructor');
  }

  themeStream = new BehaviorSubject('dark-blue');
}
