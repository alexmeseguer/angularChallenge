import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const URL_RESTCOUNTRIES_BASE = 'https://restcountries.com/v3.1';


@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get(URL_RESTCOUNTRIES_BASE.concat('/all'));
    }

    //
    getNameCountryByCode(country: string): Observable<string> {
        // Reemplazamos código del país para que coincida con la librería de restCountries.
        country = country === 'UK' ? 'GB' : country;
        return this.http.get(URL_RESTCOUNTRIES_BASE.concat('/alpha/' + country + '?fields=name'))
            .pipe(map((response: any) => response?.name?.common || "")
            );
    }

    getFlagCountryByCode(country: string): Observable<string> {
        // Reemplazamos código del país para que coincida con la librería de restCountries.
        country = country === 'UK' ? 'GB' : country;
        return this.http.get(URL_RESTCOUNTRIES_BASE.concat('/alpha/' + country + '?fields=flags'))
            .pipe(map((response: any) => {
                console.log(response.flags.png);
                return response.flags.png || "";
            })
            // .pipe(map((response: any) => response?.flags?.png || "")
            );
    }

}
