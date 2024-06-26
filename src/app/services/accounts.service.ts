import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginModel,
  LoginResponseModel,
  LogoutModel,
  RegisterModel,
} from '../account/account';
import { Observable } from 'rxjs';
import { TokensService } from './tokens.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private basePath: string;

  constructor(private http: HttpClient, private tokenService: TokensService) {
    this.basePath = 'https://localhost:7206/api/';
    this.basePath += 'accounts/';
  }

  register(model: RegisterModel): Observable<any> {
    console.log(model);
    return this.http.post(this.basePath + 'register', model);
  }

  login(model: LoginModel): Observable<LoginResponseModel> {
    console.log(model);
    return this.http.post<LoginResponseModel>(this.basePath + 'login', model);
  }

  logout(): Observable<any> {
    const model: LogoutModel = {
      refreshToken: this.tokenService.getRefreshToken() ?? '',
    };
    this.tokenService.clearTokens();
    return this.http.post(this.basePath + 'logout', model);
  }

  isAuthenticated(): boolean {
    return this.tokenService.getAccessToken() != null;
  }

  getUserEmail(): string | null {
    return this.tokenService.getAccessTokenPayload()?.email ?? null;
  }
}
