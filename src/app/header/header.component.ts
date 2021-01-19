import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = ["HOME", "ABOUT", "HOTEL", "CASINO", "EVENTS", "CONTACT"];
  languageIndex = 2;
  selectedIndex = 0;

  languages = ['vi', 'zh', 'en'];

  constructor(private router: Router,
              private translate: TranslateService) {
    translate.addLangs(['vi', 'zh', 'en']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

  openLink(link: string, index: number){
    this.selectedIndex = index;
    let strLink = link.toLowerCase();
    if(strLink === 'events'){
      strLink += '/list';
    }
    this.router.navigate([strLink]);
  }

  onSelect(index: number){
    this.languageIndex = index;
    this.translate.use(this.languages[index]);
  }

  getLanguage(language){
    switch (language) {
      case 'vi':
        return 'Tiếng Việt';
      case 'en':
        return 'English';
      case 'zh':
        return '中文';
    }
  }
}
