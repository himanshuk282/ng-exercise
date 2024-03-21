import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UnlessDirective } from '../../directives/unless.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlightDirective,UnlessDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  condition:boolean = false;
}
