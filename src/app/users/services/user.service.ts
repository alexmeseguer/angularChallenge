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
            catchError(err => of(undefined))
        );
    }

    getSuggestions(query: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}?q=${query}&limit=10`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/`, user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
    }

    deleteUser(user_id: number): Observable<boolean> {
        if (!user_id) throw Error('Usuario requerido');
        return this.http.delete(`${this.baseUrl}/${user_id}`).pipe(
            catchError(err => of(false)),
            map(resp => true)
        );
    }

}
