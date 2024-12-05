import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private service: HttpClient) { }

  getproductList() {
    return this.service.get("https://fakestoreapi.com/products").pipe(
      catchError(this.handleError)
    );
  }

  getProductDetailById(id: number)  {
    return this.service.get("https://fakestoreapi.com/products/" + id).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = `An Error occured: ${err.error.errorMessage}`;
    console.log(err);
    return throwError(() => errorMessage);
  }
}
