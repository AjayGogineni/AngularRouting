import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  @Input()
  address!: string;
  name!: string;

  @Output() nameToparent = new EventEmitter<string>();
  sendata() {
    this.nameToparent.emit(this.name);
  }
}
