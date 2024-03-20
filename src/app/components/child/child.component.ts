import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input('messageForChild') fromParent!:string;
  @Output() sendParent = new EventEmitter<string>();

  informParent(message:string){
    console.log(message);
    this.sendParent.emit(message);
  }
}
