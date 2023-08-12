import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar, public translate: TranslateService) { }

  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  changeLanguage(lang: string) {
    let elem: any = document.querySelector('html');
    elem.setAttribute('lang', lang);
    elem.setAttribute('dir', lang == 'en' ? 'ltr' : 'rtl');
    this.translate.use(lang);

    this.setLang(lang);
    window.location.reload();
  }

  getLang() {
    return localStorage.getItem('lang') || 'ar';
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
  }
}
