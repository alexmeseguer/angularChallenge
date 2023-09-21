import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { User } from 'src/swagger/models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl = environments.urlServer;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }
    
    getUserById(id: string): Observable<User | undefined> {
        return this.http.get<User>(this.baseUrl.concat("/" + id)).pipe(
            catchError( err => of(undefined))
        );
    }

    getSuggestions(query: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}?q=${query}&limit=10`);
    }
}
