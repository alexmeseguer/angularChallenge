import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map, of } from 'rxjs';
import { Address } from 'src/swagger/models';

const URL_RESTCOUNTRIES_BASE = 'https://restcountries.com/v3.1';


@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get(URL_RESTCOUNTRIES_BASE.concat('/all'));
    }

    //fields=flags'
    getNameCountryByCode(address: Address): Observable<string> {
        // Reemplazamos código del país para que coincida con la librería de restCountries.
        let country = (address.country === 'UK') ? 'GR' : address.country;
        // const response = await this.http.get(this.apiUrl, { responseType: 'text' }).toPromise();
        return this.http.get(URL_RESTCOUNTRIES_BASE.concat('/alpha/' + country + '?fields=name'))
            .pipe( map( (response: any) => response?.name?.common || "")
        );
    }

}
