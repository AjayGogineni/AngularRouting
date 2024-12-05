import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  userObj :any = {
    firstName:'',
    lastName: '',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isTermsAggree : false
  }
  onSave(){
    console.log(this.userObj);
  }
}
