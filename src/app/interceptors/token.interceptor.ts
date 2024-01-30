import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs';
import { StorageService } from '../services/storage.service';

let countRequest = 0;
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  countRequest++;
  const ngUiLoaderservice = inject(NgxUiLoaderService);
  if (isFirstRequest()) {
    initLoader(ngUiLoaderservice)
  }

  if (existToken()) {
   req = addTokenToRequest(req);
  }

  return next(req).pipe(
    finalize(() =>  stopLoader(ngUiLoaderservice) )
  );
};

let stopLoader = (ngUiLoaderservice:NgxUiLoaderService) => {
   countRequest--;
   if (countRequest === 0) {
    ngUiLoaderservice.stop();
  }
}

let initLoader = (ngUiLoaderservice:NgxUiLoaderService) => {
  ngUiLoaderservice.start();
}

let isFirstRequest = () => {
  return countRequest === 1;
}

let existToken = () => {
  const storageService = inject(StorageService);
  const token = storageService.getToken();
  return token !== '';
}

let getToken = () => {
  const storageService = inject(StorageService);
  return storageService.getToken();
}

let addTokenToRequest = (req:HttpRequest<unknown>) : HttpRequest<unknown> => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${getToken()}`
      }
    })
}
