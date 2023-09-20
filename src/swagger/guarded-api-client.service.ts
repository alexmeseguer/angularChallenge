/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';

import * as models from './models';
import * as guards from './guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAPIClient extends APIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getUsers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.User[]> {
    return super.getUsers(requestHttpOptions)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

  postUsers(
    args: {
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    return super.postUsers(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

  getUsersUserId(
    args: {
      userId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    return super.getUsersUserId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

  putUsersUserId(
    args: {
      userId: number,
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    return super.putUsersUserId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

}
