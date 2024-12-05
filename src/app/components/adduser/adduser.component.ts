import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
userName :FormControl = new FormControl();
constructor(){}
}
