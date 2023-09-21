import { Pipe, PipeTransform } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Address } from 'src/swagger/models';
import { CountriesService } from '../services/countries.service';

@Pipe({
  name: 'userCountry'
})
export class UserCountryPipe implements PipeTransform {

    constructor(private countriesService: CountriesService) {}

    transform(address: Address): Observable<string> {
        if (!address.id) return from("País no encontrado");
        return this.countriesService.getNameCountryByCode(address);
    }

}
