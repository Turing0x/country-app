import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-regiony-page',
  templateUrl: './by-regiony-page.component.html',
  styles: [
  ]
})
export class ByRegionyPageComponent {

  public countryList: Country[] = [];
  public isLoading: boolean = false;
  public selected?: Region;

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor( private countryServices: CountryService ){}

  searchByRegion( term: Region ):void {

    this.selected = term;
    
    this.isLoading = true;
    this.countryServices.getDataFromApi(term, 'region').subscribe((
      countries => {
        this.countryList = countries;
        this.isLoading = false;
      }
    ));
    
  }

}
