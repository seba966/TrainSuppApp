import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_dtos/user';

@Injectable({
  providedIn: 'root'
})
export class UserBuforService {

  constructor() { }

  currentUser: User;

  currentUserObserver = new BehaviorSubject<User>(
    {id: 0, username: '', planId: 0, gender: '',
    age: 0, height: 0, weight: 0, pal: 0});

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.currentUserObserver.next(this.currentUser);
  }

  getCurrentUser() {
    return this.currentUserObserver.asObservable();
  }
}
