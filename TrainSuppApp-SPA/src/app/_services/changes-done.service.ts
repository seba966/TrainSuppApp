import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangesDoneService {

  change: boolean;
  changeObserver: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.changeObserver.subscribe((value) => {
      this.change = value;
    });
  }
  toggleChange() {
    this.changeObserver.next(!this.change);
  }

}
