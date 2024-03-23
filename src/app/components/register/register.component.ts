import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  onSubmit(registerForm:NgForm){
    console.log(registerForm.value)
  }
  onReset(registerForm:NgForm){
    registerForm.reset();
  }
}
