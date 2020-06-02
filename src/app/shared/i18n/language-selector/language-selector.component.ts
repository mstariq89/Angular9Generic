import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

var map = new Map([
  ['en-US','English'],
  ['fr','French'],
  ['es-ES','Spanish'],
  ['en-gb','English (UK)'],
  ['it','Italian'],
  ['sv','Swedish'],
  ['ro','Romanian'],
  ['pl','Polish'],
  ['da','Danish'],
  ['de','German'],
  ['cs','Czech'],
  ['fi','Finnish'],
  ['nl','Dutch'],
  ['nb','Norwegian']
]);

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(public translate: TranslateService,private spinner: NgxSpinnerService) {
    translate.addLangs(['en-US', 'nl','de']);
    translate.setDefaultLang('en-US');
  }

  switchLang(lang: string) {
    debugger;
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

  langName(key)
  {
    return map.get(key);
  }

}
