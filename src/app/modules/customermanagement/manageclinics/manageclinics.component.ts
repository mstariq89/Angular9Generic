import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manageclinics',
  templateUrl: './manageclinics.component.html',
  styleUrls: ['./manageclinics.component.scss']
})
export class ManageclinicsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public translate: TranslateService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
