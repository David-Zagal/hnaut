import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RestService } from './rest.service';
import VersionInfo from '../../../../package.json';
import { rest } from '../../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  version = VersionInfo.version;
  fecha = VersionInfo.fecha;
  constructor(private restService: RestService) { }

  // Servicio de consulta: devuelve los datos de la versión del back
  getBackVersion(): Observable<any> {
    return this.restService.get(environment.apiRestJava + rest.endpoints.versionBack)
      .pipe(map((response: any) => response));
  }

  // Servicio de consulta: devuelve los datos de la versión del front
  getFrontVersion() {
    return this.version;
  }

  getFrontDate() {
    return this.fecha;
  }

}
