import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UnlessDirective } from '../../directives/unless.directive';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlightDirective,UnlessDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() appUser!:{name:string,age:number,isIndian:boolean};
  counter:number = 0;
  constructor(public stateSvr:StateService){}
  // ngOnInit(){
  //   this.counter = this.stateSvr.getCounter();
  // }
  raiseCounter(){
    this.stateSvr.incrementCounter();
    this.counter = this.stateSvr.getCounter();
  }
}
