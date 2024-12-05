import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpRequest, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { globalErrorInterceptorInterceptor } from './ErrorHandling/global-error-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(withInterceptorsFromDi()),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: globalErrorInterceptorInterceptor,
    multi: true
  }
  ]
};
