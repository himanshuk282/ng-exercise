import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ChildComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  joke:string = "Loading...";
  category:string = "random";
  constructor(private jokeService:JokeService){}
  getJoke(){
    this.jokeService.getRandomJoke().subscribe({
      next:(response:any)=>{
        this.joke = response.value;
      },
      error:(err)=>{
        alert("Error in get joke: "+err);
      }
    })
  }
  checkCategory(){
    this.jokeService.getCategory().subscribe({
      next:(response:any)=>{
        if(response.includes(this.category.toLowerCase())){
          //Fetch the joke from that category
          this.jokeService.getJokeInCategory(this.category.toLowerCase()).subscribe({
            next:(response:any)=>{
              this.joke = response.value;
            },
            error:(err)=>{
              alert("Error in get joke: "+err);
            }
          })
        }
        else{
          alert("Error with category, Category not found.");
        }
        
      },
      error:(err)=>{
        alert("Error.");
      }
    })
  }  
}
