import {Component} from '@angular/core';
import {slideInAnimation} from './animations';
import {RouterOutlet} from '@angular/router';
import {UiService} from './data-services/ui.service';
import {AuthService} from './auth/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'FelixHotelCasino';
  isAlertShow = false;

  constructor(private uiService: UiService,
              private authService: AuthService,
              translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    this.authService.initAuthListener();
    this.uiService.alertChangedSub.subscribe(isAlert => {
      this.isAlertShow = isAlert;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
