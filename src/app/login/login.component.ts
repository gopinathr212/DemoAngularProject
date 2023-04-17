import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 

  sampleForm!:FormGroup;
  ngOnInit(): void {
    this.sampleForm= new FormGroup(
      {
        'email':new FormControl('',[Validators.required, Validators.email]),
        'password':new FormControl('',[Validators.required,Validators.minLength(8)])
      }

    );
  }
  handleFormData()
  {
    console.log(this.sampleForm.value);
  }
 
  }


 



