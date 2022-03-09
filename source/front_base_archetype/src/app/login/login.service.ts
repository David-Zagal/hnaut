import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { RestService } from '../core/services/rest.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../core/models/services/response/service-response.model';
import { LoginResponse } from '../core/models/services/response/login-response.model';
import { rest } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restService: RestService) { }

  auth(payload: any): Observable<ServiceResponse<LoginResponse>> {
    return this.restService.post(environment.apiRestJava + rest.endpoints.signin, payload)
      .pipe(map((res: ServiceResponse<LoginResponse>) => res));
  }

  saveToken(token: any) {
    window.sessionStorage.setItem(environment.TOKEN_KEY, token.tokenType + ' ' + token.accessToken);
  }

  logout(payload: any) {
    return this.restService.post(environment.apiRestJava + rest.endpoints.signout, payload);
  }

  refresh(payload: any): Observable<ServiceResponse<LoginResponse>> {
    return this.restService.post(environment.apiRestJava + rest.endpoints.refresh, payload).pipe(
      tap((res: ServiceResponse<LoginResponse>) => {
        if (res != null && res.restResponse != null) {
          this.saveToken(res.restResponse);
        }
      })
    );
  }

  saveRefreshToken(token: any) {
    window.sessionStorage.setItem(environment.REFRESH_TOKEN_KEY, token.refreshToken);
  }
}
