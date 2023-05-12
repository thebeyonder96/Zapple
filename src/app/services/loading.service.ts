import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading(){
    this.loadingSubject.next(true)
  }

  hideLoading(){
    this.loadingSubject.next(false)
  }

  get isLoading(){
    return this.loadingSubject.asObservable();
  }
}
