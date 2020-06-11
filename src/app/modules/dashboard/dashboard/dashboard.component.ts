import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DatePipe } from '@angular/common';
HC_exporting(Highcharts);
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOptions: any;
  chartHC: Highcharts.Chart;
  startDateStr: any;
  endDateStr: any;
  constructor(private spinner: NgxSpinnerService,
    public translate:TranslateService,
    private datePipe: DatePipe) {
    
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
    this.startDateStr = this.datePipe.transform(range.from, 'MM/dd/yyyy');
    this.endDateStr = this.datePipe.transform(range.to, 'MM/dd/yyyy');
    setTimeout(() => {
      this.loadChart();
       /** spinner ends after 5 seconds */
       this.spinner.hide();
      }, 1000);
  }

  loadChart() {
   //  this.chartOptions = {
   //     chart: {
   //        type: "spline"
   //     },
   //     exporting: {
   //        enabled: false
   //     },
   //     credits: {
   //        enabled: false
   //     },
   //     title: {
   //        text: "Monthly Average Temperature"
   //     },
   //     subtitle: {
   //        text: this.startDateStr + ' to ' + this.endDateStr
   //     },
   //     xAxis: {
   //        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
   //           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   //     },
   //     yAxis: {
   //        title: {
   //           text: "Temperature °C"
   //        }
   //     },
   //     tooltip: {
   //        valueSuffix: " °C"
   //     },
   //     series: [
   //        {
   //           name: 'Tokyo',
   //           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
   //        },
   //        {
   //           name: 'New York',
   //           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
   //        },
   //        {
   //           name: 'Berlin',
   //           data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
   //        },
   //        {
   //           name: 'London',
   //           data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
   //        }
   //     ]
   //  };

   this.chartOptions = {   
      chart : {
         type: 'column'
      },
      title : {
         text: 'Device Summary'   
      },
      subtitle: {
         text: this.startDateStr + ' to ' + this.endDateStr
      },
      exporting: {
         enabled: false
      },
      xAxis : {
         categories: ['USA', 'EUROPE', 'JAPAN', 'IND']
      },
      yAxis : {
         allowDecimals: false,
         min: 0,
         title: {
            text: 'Number of devices'
         }     
      },
      plotOptions : {
         column: {
            stacking: 'normal'        
         }
      },
      credits : {
         enabled: false
      },
      series : [
         {
            name: 'Assigned',
            data: [5, 3, 4, 7],
            stack: 'male'
         }, 
         {
            name: 'Activated',
            data: [3, 4, 4, 2],
            stack: 'male'
         }, 
         {
            name: 'Decommissioned',
            data: [2, 5, 6, 2],
            stack: 'female'
         }, 
         {
            name: 'Service',
            data: [3, 0, 4, 4],
            stack: 'female'
         }
      ]
   };

    this.chartHC = Highcharts.chart('chartContainer', this.chartOptions);
 }

}
