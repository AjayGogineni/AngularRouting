import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { JsonPipe } from '@angular/common';
// import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  Id: number = 0;
  product : any;
  constructor(private _route: ActivatedRoute, private _service: ProductService) { }

  ngOnInit(): void {
    this.Id = this._route.snapshot.params['id'];
    console.log(this.Id)
    this.getProduct(this.Id)
  }
  getProduct(id:number){
    this._service.getProductDetailById(id).subscribe(res =>{
      this.product =res
      console.log(this.product);
    })
  }

}
