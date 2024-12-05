import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export class globalErrorInterceptorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(
      catchError((error : HttpErrorResponse) =>{

        if(error.status === 404)
        {
          window.confirm('Resource Not Found');
        }
        else if(error.status === 400)
        {
          window.confirm('something wrong with the request, please correct it and send it again.');
        }
        else if(error.status === 500)
        {
          window.confirm('Server Error');
        }
        else{
          window.confirm('An Unexpected error occured');
        }
        return throwError( () => new Error(error.message));
      })
    );
  }
}
