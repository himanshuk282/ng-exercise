import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ChildComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  applicationUsers:{name:string,age:number,isIndian:boolean}[] = [
    {
      name:"Himanshu",
      age:25,
      isIndian:true
    },
    {
      name:"Ahmad",
      age:25,
      isIndian:true
    },
    {
      name:"Amanda",
      age:42,
      isIndian:false
    }
  ];
}
