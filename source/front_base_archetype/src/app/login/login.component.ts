import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { ToastService } from '../core/services/toast.service';
import { RouteStateService } from '../core/services/route-state.service';
import { SessionService } from '../core/services/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from '../core/services/user-context.service';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  userName: string;
  password: string;
  locale: string;
  languages: any[];
  selectedLanguage: any;
  loginForm: FormGroup;

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    
  }

  ngAfterContentChecked(): void {
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
  }

  ngOnInit() {
    this.languages = [
      { name: 'Spain', locale: 'es', flag: 'espanol.png' },
      { name: 'UK', locale: 'en', flag: 'ingles.png' },
    ];
    console.log(this.languages);
    this.loginForm = this.fb.group({
      'userName': new FormControl(this.userName, Validators.required),
      'password': new FormControl(this.password, Validators.required)
    });
    this.userName = '';
    this.password = '';
    this.locale = this.sessionService.getItem('ng-prime-language');
    this.languages.forEach(languague => {
      if (languague.locale === this.locale) {
        this.selectedLanguage = languague;
      }
    });
  }

  onClickLogin() {
    this.userName = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;
    this.userService.setUser(this.userName, this.password);
    this.logInUser();
    return;
  }

  logInUser() {
    const observable = this.loginService.auth({ username: this.userName, password: this.password });
    observable.subscribe(response => {
      if (response != null && response.restResponse) {
        this.loginService.saveToken(response.restResponse);
        this.loginService.saveRefreshToken(response.restResponse);

        const observable2 = this.userService.getUser();
        observable2.subscribe(response2 => {
          if (response2 && response2.restResponse) {
            this.userContextService.setUser(response2.restResponse);
            this.routeStateService.add('Entrada', '/main', null, true);
            // this.routeStateService.add('Entrada', '/main/dashboard', null, true);
            this.toastService.addSingle('success', '', this.translate.instant('alertas.bienvenida'), false);
            return;
          }
        });
      } else {

      }
    },
      err => {
        if (err.status) {
          this.toastService.addSingle('error', '', this.translate.instant('alertas.loginIncorrecto'), true);
        }
      });
  }

  onLanguageChange() {
    this.locale = this.selectedLanguage.locale;

    if (this.locale === undefined || this.locale == null || this.locale.length === 0) {
      this.locale = 'es';
    }
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.locale);
    this.sessionService.setItem('ng-prime-language', this.locale);
  }

}
