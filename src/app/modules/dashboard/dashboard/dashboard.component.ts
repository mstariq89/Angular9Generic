import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public translate:TranslateService) {
    
   }

  ngOnInit(): void {
    
    this.spinner.show();
 
    setTimeout(() => {
      // $('.daterange').on('apply.daterangepicker', function(ev, picker) {
      //   console.log(picker.startDate.format('YYYY-MM-DD'));
      //   console.log(picker.endDate.format('YYYY-MM-DD'));
        
      // });
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  public onDateRangeSelection(range: { from: Date, to: Date }) {
    debugger;
    console.log(`Selected range: ${range.from} - ${range.to}`);
    this.spinner.show();
 
    setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
      }, 1000);
  }

}
