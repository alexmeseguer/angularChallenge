import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { User } from 'src/swagger/models';
import { AppRoutes } from '../../models/app-routes.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl = environments.urlServer;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }
}