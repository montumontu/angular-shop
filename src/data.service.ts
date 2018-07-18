import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {

  private cartCounter = new BehaviorSubject(0);
  currentCount = this.cartCounter.asObservable();
  changeCount(count: number) {

    this.cartCounter.next(count);

  }

  constructor() { }
}
