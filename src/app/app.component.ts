import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from './core/core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentLang: any;

  constructor(
    private TranslateService: TranslateService,
    private coreService: CoreService
  ) {
    TranslateService.setDefaultLang(this.coreService.getLang());
    this.currentLang = this.coreService.getLang();

  }
  changeLanguage(language: string): void {
    this.currentLang = language;
    this.TranslateService.use(language);
    this.coreService.changeLanguage(language);
  }
}
