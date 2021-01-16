import {Component} from '@angular/core';
import {slideInAnimation} from './animations';
import {RouterOutlet} from '@angular/router';
import {UiService} from './data-services/ui.service';
import {AuthService} from './auth/auth.service';

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
              private authService: AuthService) {
    this.authService.initAuthListener();
    this.uiService.alertChangedSub.subscribe(isAlert => {
      this.isAlertShow = isAlert;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
