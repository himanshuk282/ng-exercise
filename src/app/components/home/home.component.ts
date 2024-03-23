import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke.service';
import { Child2Component } from '../child2/child2.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ChildComponent,Child2Component,CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
