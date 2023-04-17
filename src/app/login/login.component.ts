import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        'name':new FormControl('',[Validators.required]),
        'email':new FormControl('',[Validators.required, Validators.email]),
        'age':new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')])
      }

    );
  }
  handleFormData()
  {
    console.log(this.sampleForm.value);
  }
  }


 



