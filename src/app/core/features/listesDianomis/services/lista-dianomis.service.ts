import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaDianomis } from '../models/listadianomis.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListaDianomisService {

  constructor(private http:HttpClient) {

   }


   getAllListesDianomis() : Observable<ListaDianomis[]> {
    return this.http.get<ListaDianomis[]>(`${environment.apiBaseUrl}/api/ListesDianomis`);
   }

}
