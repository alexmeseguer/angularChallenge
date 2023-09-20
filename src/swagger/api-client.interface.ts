/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Get all users
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.User[]>;

  /**
   * Response generated for [ 201 ] HTTP response code.
   */
  postUsers(
    args: {
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User>;

  /**
   * Get one user
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUserId(
    args: {
      userId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  putUsersUserId(
    args: {
      userId: number,
      user: models.User,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteUsersUserId(
    args: {
      userId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
