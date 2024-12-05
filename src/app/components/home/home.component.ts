import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import {RouterModule,RouterLink,ActivatedRoute} from '@angular/router';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: ProductService){}

  productList : any;
  ngOnInit(){
    this.getProduct()
  }
  getProduct(){
    this.service.getproductList().subscribe(
      {
        next:(data) =>{
          this.productList =data;
          console.log(data);
        },
        error:(err) =>{console.log(err)},
      }
      // res =>{
      // this.productList =res
      // console.log(this.productList);}
    );
  }

}
