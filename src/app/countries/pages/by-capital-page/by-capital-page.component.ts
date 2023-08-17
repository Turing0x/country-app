import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent {

  public countryList: Country[] = [];
  public isLoading: boolean = false;

  constructor( private countryServices: CountryService ){}

  searchByCapital( term: string ):void {
    this.isLoading = true;
    this.countryServices.getDataFromApi(term, 'capital').subscribe((
      countries => {
        this.countryList = countries;
        this.isLoading = false;
      }
    ));
  }

}
