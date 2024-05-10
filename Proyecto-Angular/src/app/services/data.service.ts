import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  API_URL: string = "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  
  httpClient = inject(HttpClient);
  
  obtenerDatos(){
  return this.httpClient.get(this.API_URL);
  }
}
