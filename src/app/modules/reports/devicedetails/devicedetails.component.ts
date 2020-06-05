import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DatePipe } from '@angular/common';
import * as jspdf from 'jspdf';
import * as moment from 'moment';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
import canvg from 'canvg';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
   selector: 'app-devicedetails',
   templateUrl: './devicedetails.component.html',
   styleUrls: ['./devicedetails.component.scss'],
   // providers: [DatePipe]
})
export class DevicedetailsComponent implements OnInit {
   highcharts = Highcharts;
   // highchartsCC = Highcharts;
   // highchartsBC = Highcharts;
   chartOptions: any;
   chartOptionsCC: any;
   chartOptionsBC: any;
   chartOptionsSC: any;
   startDateStr: any;
   endDateStr: any;
   currDate = new Date();
   imgLogoToBase64: any;

   start = moment().subtract(29, 'days');
   end = moment();
   chartPC: Highcharts.Chart;
   chartCC: Highcharts.Chart;
   chartBC: Highcharts.Chart;
   chartSC: Highcharts.Chart;
   constructor(private datePipe: DatePipe,
      private spinner: NgxSpinnerService,
      private sweetalertSvc: Sweetalert2Service) {


      // this.currDateStr = this.datePipe.transform(this.currDate, 'yyyy/MM/dd');
      // this.pastDateStr = this.datePipe.transform(new Date().setDate(this.currDate.getDate() - 30), 'yyyy/MM/dd');

   }

   ngOnInit(): void {

      //$('a').click(function() { 
      //       $('a.dropdown-item.active').removeClass("active"); 
      //       $(this).addClass("active"); 
      //   });



      // $('input[name="daterange"]').daterangepicker({
      //    opens: 'left'
      //  }, function(start, end, label) {
      //    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      //  });


      // var start = moment().subtract(29, 'days');
      // var end = moment();


      //       $('#reportrange').daterangepicker({
      //          startDate: start,
      //          endDate: end,
      //          ranges: {
      //             'Today': [moment(), moment()],
      //             'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      //             'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      //             'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      //             'This Month': [moment().startOf('month'), moment().endOf('month')],
      //             'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      //          }
      //      }, function (start, end) {
      //       $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      //   });



      // $('.daterange').daterangepicker({
      //    // "showDropdowns": true,
      //    // opens: 'right',
      //    startDate: this.start,
      //    endDate: this.end,
      //    // language: 'nl',
      //    locale: 'nl',
      //    ranges: {
      //       'Today': [moment(), moment()],
      //       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      //       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      //       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      //       'This Month': [moment().startOf('month'), moment().endOf('month')],
      //       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      //    }
      // },this.cb);
      // this.cb(this.start, this.end);


      //this.loadChart();
   }

   cb(start, end) {
      $('.daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      $('.customDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
   }

   loadChart() {
      this.loadPieChart();
      this.loadColumnChart();
      this.loadBarChart();
      this.loadStackedColumnChart();
   }


   loadPieChart() {
      this.chartOptions = {
         chart: {
            plotBorderWidth: null,
            plotShadow: false
         },
         credits: {
            enabled: false
         },
         exporting: {
            enabled: false
         },
         title: {
            text: 'Pie Chart'
         },
         subtitle: {
            text: this.startDateStr + ' to ' + this.endDateStr
         },
         tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions: {
            pie: {
               shadow: false,
               //  center: ['50%', '50%'],
               //  size:'45%',
               //  innerSize: '20%'  ,
               allowPointSelect: true,
               cursor: 'pointer',

               dataLabels: {
                  enabled: true
               },

               showInLegend: true
            }
         },
         series: [{
            type: 'pie',
            name: 'Device Details',
            data: [
               ['Assigned', 60.0],
               ['Manufacture', 5.0],
               {
                  name: 'Activated',
                  y: 30.0,
                  // sliced: true,
                  // selected: true
               },
               ['Decommissioned', 3.0],
               ['Deactivated', 1.0],
               ['Under Service', 1.0]
            ]
         }]
      };
      this.chartPC = Highcharts.chart('chartContainer', this.chartOptions);
   }
   loadColumnChart() {
      this.chartOptionsCC = {
         title: {
            text: 'Column Chart'
         },
         subtitle: {
            text: this.startDateStr + ' to ' + this.endDateStr
         },
         credits: {
            enabled: false
         },
         exporting: {
            enabled: false
         },
         xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
         },
         labels: {
            items: [{
               html: 'Total fruit consumption',
               style: {
                  left: '50px',
                  top: '18px',
                  color: 'black'
               }
            }]
         },
         series: [
            {
               type: 'column',
               name: 'Jane',
               data: [3, 2, 1, 3, 4]
            },
            {
               type: 'column',
               name: 'John',
               data: [2, 3, 5, 7, 6]
            },
            {
               type: 'column',
               name: 'Joe',
               data: [4, 3, 3, 9, 0]
            },
            {
               type: 'spline',
               name: 'Average',
               data: [3, 2.67, 3, 6.33, 3.33]
            },
            {
               type: 'pie',
               name: 'Total consumption',
               data: [
                  {
                     name: 'Jane',
                     y: 13,
                     color: Highcharts.getOptions().colors[0] // Jane's color
                  },
                  {
                     name: 'John',
                     y: 23,
                     color: Highcharts.getOptions().colors[1] // John's color
                  },
                  {
                     name: 'Joe',
                     y: 19,
                     color: Highcharts.getOptions().colors[2] // Joe's color
                  }
               ],
               center: [100, 80],
               size: 100,
               showInLegend: false,
               dataLabels: {
                  enabled: false
               }
            },
         ]
      };
      this.chartCC = Highcharts.chart('chartContainerCC', this.chartOptionsCC);

   }
   loadBarChart() {
      this.chartOptionsBC = {
         chart: {
            type: 'column'
         },
         credits: {
            enabled: false
         },
         exporting: {
            enabled: false
         },
         title: {
            text: 'Monthly Average Rainfall'
         },
         subtitle: {
            text: this.startDateStr + ' to ' + this.endDateStr
         },
         xAxis: {
            categories: [
               'Jan',
               'Feb',
               'Mar',
               'Apr',
               'May',
               'Jun',
               'Jul',
               'Aug',
               'Sep',
               'Oct',
               'Nov',
               'Dec'
            ],
            crosshair: true
         },
         yAxis: {
            min: 0,
            title: {
               text: 'Rainfall (mm)'
            }
         },
         tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
               '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
         },
         plotOptions: {
            column: {
               pointPadding: 0.2,
               borderWidth: 0
            }
         },
         series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

         }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

         }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

         }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

         }]
      };
      this.chartBC = Highcharts.chart('chartContainerBC', this.chartOptionsBC);

   }

   loadStackedColumnChart() {
      this.chartOptionsSC = {
         chart: {
            type: 'column'
         },
         credits: {
            enabled: false
         },
         exporting: {
            enabled: false
         },
         title: {
            text: 'Stacked Column Chart'
         },
         subtitle: {
            text: this.startDateStr + ' to ' + this.endDateStr
         },
         xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
         },
         yAxis: {
            min: 0,
            title: {
               text: 'Total fruit consumption'
            },
            stackLabels: {
               enabled: true,
               style: {
                  fontWeight: 'bold',
                  color: ( // theme
                     Highcharts.defaultOptions.title.style &&
                     Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
               }
            }
         },
         legend: {
            //  align: 'right',
            //  x: -30,
            //  verticalAlign: 'top',
            //  y: 25,
            //  floating: true,
            //  backgroundColor:
            //      Highcharts.defaultOptions.legend.backgroundColor || 'white',
            //  borderColor: '#CCC',
            //  borderWidth: 1,
            //  shadow: false
         },
         tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
         },
         plotOptions: {
            column: {
               stacking: 'normal',
               dataLabels: {
                  enabled: true
               }
            }
         },
         series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
         }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
         }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
         }]
      };
      this.chartSC = Highcharts.chart('chartContainerSC', this.chartOptionsSC);

   }

   onClickPdfDownload() {
      this.spinner.show();

      setTimeout(() => {
         this.pdfDownload();

         /** spinner ends after 5 seconds */
         this.spinner.hide();
      }, 1000);

   }

   pdfDownload() {
      debugger;
      var doc = new jspdf('landscape', 'pt', 'a4', true);
      let chartSVG = this.chartPC.getSVG({
         chart: {
            width: 450,
            height: 550
         }
      });
      var chartCanvas = document.createElement('canvas');
      canvg(chartCanvas, chartSVG);
      var chartBase64 = chartCanvas.toDataURL('image/PNG');
      doc.addImage(chartBase64, 'PNG', 80, 120, 300, 320, '', 'FAST');

      let chartSVGCC = this.chartCC.getSVG({
         chart: {
            width: 450,
            height: 550
         }
      });
      var chartCanvasCC = document.createElement('canvas');
      canvg(chartCanvasCC, chartSVGCC);
      var chartCCBase64 = chartCanvasCC.toDataURL('image/PNG');
      doc.addImage(chartCCBase64, 'PNG', 480, 120, 300, 320, '', 'FAST');

      doc.addPage();

      let chartSVGSC = this.chartSC.getSVG({
         chart: {
            width: 450,
            height: 550
         }
      });
      var chartCanvasSC = document.createElement('canvas');
      canvg(chartCanvasSC, chartSVGSC);
      var chartSCBase64 = chartCanvasSC.toDataURL('image/PNG');
      doc.addImage(chartSCBase64, 'PNG', 80, 120, 300, 320, '', 'FAST');

      let chartSVGBC = this.chartBC.getSVG({
         chart: {
            width: 450,
            height: 550
         }
      });
      var chartCanvasBC = document.createElement('canvas');
      canvg(chartCanvasBC, chartSVGBC);
      var chartBCBase64 = chartCanvasBC.toDataURL('image/PNG');
      doc.addImage(chartBCBase64, 'PNG', 480, 120, 300, 320, '', 'FAST');
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

   setDateRange(dateRange) {
      switch (dateRange) {
         case 'today':
            this.start = moment();
            this.end = moment();
            break;
         case '7d':
            this.start = moment().subtract(6, 'days');
            this.end = moment();
            break;
         case '14d':
            this.start = moment().subtract(13, 'days');
            this.end = moment();
            break;
         case '30d':
            this.start = moment().subtract(29, 'days');
            this.end = moment();
            break;
         case 'TM':
            this.start = moment().startOf('month');
            this.end = moment().endOf('month');
            break;
         case 'LM':
            this.start = moment().subtract(1, 'month').startOf('month');
            this.end = moment().subtract(1, 'month').endOf('month');
            break;
      }
      this.cb(this.start, this.end);

   }
   setCustomRange() {

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
