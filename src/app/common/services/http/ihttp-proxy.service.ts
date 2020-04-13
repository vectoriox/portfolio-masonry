import { Observable } from 'rxjs';
import * as AppResponse from "./model/base-response.model";
import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IProxyService {
  get<T>(uri: string, params?: any): Observable<AppResponse.BaseResponse<T>>;a
  getEx<T>(route: string, params?: any, options?: IOptions): Observable<AppResponse.BaseResponse<T>>;
  post<T>(uri: string, data?: any, params?: any, options?: IOptions): Observable<AppResponse.BaseResponse<T>>;
  put<T>(uri: string, data: any, params?: any, options?: IOptions): Observable<AppResponse.BaseResponse<T>>;
  delete<T>(uri: string, data: any, params?: any, options?: IOptions): Observable<AppResponse.BaseResponse<T>>;
}
export interface IOptions {
  headers?: HttpHeaders;
  observe?: string;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: string;
  withCredentials?: boolean;
}