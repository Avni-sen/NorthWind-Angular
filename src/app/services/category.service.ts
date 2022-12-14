import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';
import { listResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44336/api/Categories/getall';


  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<listResponseModel<Category>> {
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }
}
