import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  counter:number = 0;
  constructor(public stateSvr:StateService){}
  raiseCounter(){
    this.stateSvr.incrementCounter();
    this.counter = this.stateSvr.getCounter();
  }
}
