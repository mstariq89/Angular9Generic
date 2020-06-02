import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-managecustomers',
  templateUrl: './managecustomers.component.html',
  styleUrls: ['./managecustomers.component.scss']
})
export class ManagecustomersComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public translate: TranslateService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
