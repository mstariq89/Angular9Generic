import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import canvg from 'canvg';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';

@Component({
   selector: 'app-devicehistory',
   templateUrl: './devicehistory.component.html',
   styleUrls: ['./devicehistory.component.scss']
})
export class DevicehistoryComponent implements OnInit {
   highcharts = Highcharts;
   chartOptions: any;
   chartHC: Highcharts.Chart;

   startDateStr: any;
   endDateStr: any;

   constructor(private spinner: NgxSpinnerService, 
      private sweetalertSvc: Sweetalert2Service,
      private datePipe: DatePipe) { }

   ngOnInit(): void {
      //this.loadChart();
   }

   loadChart() {
      this.chartOptions = {
         chart: {
            type: "spline"
         },
         exporting: {
            enabled: false
         },
         // exporting: {
         //    buttons: {
         //      contextButton: {
         //        menuItems: ['viewFullscreen',
         //           {
         //          text: 'Export to PNG (small)',
         //          onclick: function() {
         //            this.exportChart({
         //              width: 250
         //            });
         //          }
         //        }, {
         //          text: 'Export to PNG (large)',
         //          onclick: function() {
         //            this.exportChart();
         //          },
         //          separator: false
         //        }]
         //      }
         //    }
         //  },
         credits: {
            enabled: false
         },
         title: {
            text: "Monthly Average Temperature"
         },
         subtitle: {
            text: this.startDateStr + ' to ' + this.endDateStr
         },
         xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
         },
         yAxis: {
            title: {
               text: "Temperature °C"
            }
         },
         tooltip: {
            valueSuffix: " °C"
         },
         series: [
            {
               name: 'Tokyo',
               data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            },
            {
               name: 'New York',
               data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            },
            {
               name: 'Berlin',
               data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            },
            {
               name: 'London',
               data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }
         ]
      };

      this.chartHC = Highcharts.chart('chartContainer', this.chartOptions);
   }

   onClickPdfDownload() {
      debugger;
      this.spinner.show();

      setTimeout(() => {
         this.pdfDownload();

         /** spinner ends after 5 seconds */
         this.spinner.hide();
      }, 1000);

   }
   pdfDownload() {
      var doc = new jspdf('landscape', 'pt', 'a4', true);
      // doc.text('Hello world!', 10, 10);
      let chartSVG = this.chartHC.getSVG({
         chart: {
            width: 1600,
            height: 500
         }
      });
      var chartCanvas = document.createElement('canvas');
      canvg(chartCanvas, chartSVG);
      var chartBase64 = chartCanvas.toDataURL('image/PNG');
      doc.addImage(chartBase64, 'PNG', 30, 100, 790, 350, '', 'FAST');
      this.addPageNumber(doc);
      doc.save("EHealthCare.pdf");
      this.sweetalertSvc.sweetalertShow('success', 'Report PDF downloaded successfully', "Now you can view the downloaded pdf");
   }

   addPageNumber(doc: any) {

      let totalPages = doc.internal.getNumberOfPages();
      for (var i = 0; i < totalPages; i++) {
         doc.setPage(i);
         doc.setFontSize(7);
         doc.setTextColor(128, 128, 128);
         doc.line(20, doc.internal.pageSize.height - 40, 820, doc.internal.pageSize.height - 40);

         doc.setFontType("normal");
         doc.setFontSize(10);
         doc.setFontSize(8);
         doc.text("Page " + doc.internal.getCurrentPageInfo().pageNumber + " of " + totalPages, 780, doc.internal.pageSize.height - 15);
      }
   }

   public onDateRangeSelection(range: { from: Date, to: Date }) {
      console.log(`Selected range: ${range.from} - ${range.to}`);
      this.spinner.show();

      this.startDateStr = this.datePipe.transform(range.from, 'MM-dd-yyyy');
      this.endDateStr = this.datePipe.transform(range.to, 'MM-dd-yyyy');
      setTimeout(() => {
         this.loadChart();
         this.spinner.hide();
      }, 1000);
   }
}
