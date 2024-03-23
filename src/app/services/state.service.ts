import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private counter:number = 0;
  constructor() { }
  getCounter(){
    return this.counter;
  }
  incrementCounter(){
    this.counter = this.counter + 1;
  }
}
