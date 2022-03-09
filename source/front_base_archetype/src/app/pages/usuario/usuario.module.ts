import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { AppCommonModule } from '../../app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OpcMenuService } from '../services/opc-menu.service';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { PickListModule } from 'primeng/picklist';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldsetModule } from 'primeng/fieldset';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    UsuarioRoutingModule,
    DialogModule,
    DividerModule,
    PickListModule,
    InputSwitchModule,
    MultiSelectModule,
    FieldsetModule,
    AutoCompleteModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  providers:[
    OpcMenuService
  ]
})
export class UsuarioModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
