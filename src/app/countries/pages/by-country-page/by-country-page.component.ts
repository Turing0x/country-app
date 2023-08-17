import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countryList: Country[] = [];
  public isLoading: boolean = false;
  
  constructor( private countryServices: CountryService ){}

  searchByPais( term: string ):void {    
    this.isLoading = true;
    this.countryServices.getDataFromApi(term, 'name').subscribe((
      countries => {
        this.countryList = countries;        
        this.isLoading = false;
      }
    ));
  }

}
