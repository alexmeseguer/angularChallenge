import { Pipe, PipeTransform } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CountriesService } from '../services/countries.service';

@Pipe({
  name: 'userCountry'
})
export class UserCountryPipe implements PipeTransform {

    constructor(private countriesService: CountriesService) {}

    transform(country: string): Observable<string> {
        if (!country) return from("País no encontrado");
        return this.countriesService.getNameCountryByCode(country);
    }
}
