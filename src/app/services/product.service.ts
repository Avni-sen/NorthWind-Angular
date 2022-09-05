import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44336/api/';


  constructor(private httpClient: HttpClient) { }

  //bir servisten api isteğii için yapılan olay budur.
  getProducts(): Observable<listResponseModel<Product>> {
    let urlPath = this.apiUrl + "Products/getall";
    return this.httpClient.get<listResponseModel<Product>>(urlPath);
  }

  getProductsByCategoryId(categoryId: number): Observable<listResponseModel<Product>> {
    let urlPath = this.apiUrl + "Products/getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<listResponseModel<Product>>(urlPath);
  }
}
