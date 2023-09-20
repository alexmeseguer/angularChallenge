/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient implements APIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `//${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Get all users
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.User[]> {
    const path = `/users`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.User[]>('GET', path, options);
  }

  /**
   * Response generated for [ 201 ] HTTP response code.
   */
  postUsers(
    args: {
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/users`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.User>('POST', path, options, JSON.stringify(args.user));
  }

  /**
   * Get one user
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUserId(
    args: {
      userId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/users/${args.userId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.User>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  putUsersUserId(
    args: {
      userId: number,
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/users/${args.userId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.User>('PUT', path, options, JSON.stringify(args.user));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteUsersUserId(
    args: {
      userId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/users/${args.userId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
