import { Observable, catchError, delay, map, of, pipe, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CacheStore } from '../interfaces/cache_storage.interface';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})

export class CountryService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient ) { }

  getByAlphaCode( term: string, byType: string ): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.url}/${byType}/${term}`)
      .pipe(
        map( countries => countries.length === 1 ? countries[0] : null ),
        catchError( error => of(null) ),
      );
  }

  getDataFromApi( term: string, byType: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/${byType}/${term}`)
      .pipe(
        catchError( error => of([]) ),
        delay( 3000 )
      );
  }
  
}