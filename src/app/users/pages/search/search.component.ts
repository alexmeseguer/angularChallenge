import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { User } from 'src/swagger/models';
import { UserService } from '../../services/user.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [
    ]
})
export class SearchComponent implements OnInit {

    searchInput = new FormControl('');
    filteredOptions: Observable<User[]> = of([]);
    userSelected: User | null = null;

    constructor(private userService: UserService) { }
    
    ngOnInit() {
        this.filteredOptions = this.searchInput.valueChanges.pipe(
            debounceTime(300), // Espera 300 ms de inactividad en el input
            distinctUntilChanged(), // Ignora si el valor es el mismo que el anterior
            switchMap(value => this.userService.getSuggestions(value || '')));
    }

    onSelectedOption(event: MatAutocompleteSelectedEvent): void {
        console.log(event.option.value);
        if(!event.option.value) return;
        const user: User = event.option.value;
        this.userSelected = user;
        this.searchInput.setValue(`${user.firstname || ""} ${user.lastname || ""}`);
    }
}
