import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefroms',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './reactivefroms.component.html',
  styleUrl: './reactivefroms.component.css'
})
export class ReactivefromsComponent {
  userFrom: FormGroup = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    userName:new FormControl(""),
    city:new FormControl(""),
    state:new FormControl("Goa"),
    zipCode:new FormControl(""),
    isTermsAggree : new FormControl(false)
  })

  OnUserSave(){
    console.log(this.userFrom.value);
  }
}
