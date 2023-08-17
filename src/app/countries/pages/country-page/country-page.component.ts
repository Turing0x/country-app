import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})

export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor (
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe( switchMap( ({alphaCode}) => 
          this.countryService.getByAlphaCode(alphaCode, 'alpha') ))
      .subscribe( country => {
        ( !country )
          ? this.router.navigateByUrl('')
          : this.country = country;
      });

  }

}
