import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "https://localhost:44336/api/";
  constructor(private httpClient: HttpClient) { }


  login(user: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "auth/login", user)
  }


  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }



}
