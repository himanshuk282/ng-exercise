import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = "String Interpolation";
  user:{name:string,profession:string} = {
    name:"Himanshu",
    profession:"Full Stack Developer"
  };
  isDisabled:boolean = true;
  alertUser(event:Event,initiator:string){
    alert("The user has clicked "+initiator+" the button!");
  }
  username:string = "Default Value";
}
