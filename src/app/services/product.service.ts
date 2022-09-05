import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResonseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44336/api/Products/getall';

  constructor(private httpClient: HttpClient) { }

  //bir servisten api isteğii için yapılan olay budur.
  getProducts(): Observable<listResonseModel<Product>> {
    return this.httpClient.get<listResonseModel<Product>>(this.apiUrl);
  }
}
