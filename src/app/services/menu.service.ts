import { menu } from './../../interfaces/menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<menu[]> {
    return this.http.get<menu[]>("./assets/data/menu.json");
  }
}
