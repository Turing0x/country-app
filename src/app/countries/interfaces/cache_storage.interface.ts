import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermContry;
  byCountry: TermContry;
  byRegion: TermRegionContry;
}

export interface TermContry {
  term: string;
  countries: Country[]
}

export interface TermRegionContry {
  region: Region;
  countries: Country[]
}