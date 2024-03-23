import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  ngOnInit(){
    this.loginForm = new FormGroup({
      'email':new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      'password':new FormControl("",[
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
  onReset(){
    this.loginForm.reset()
  }
}
