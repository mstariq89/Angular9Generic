import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateRangeSelectorService } from './date-range-selector.service';
declare var $: any;

@Component({
  selector: 'app-date-range-selector',
  templateUrl: './date-range-selector.component.html',
  styleUrls: ['./date-range-selector.component.scss']
})
export class DateRangeSelectorComponent implements OnInit {
  // start = moment().subtract(29, 'days');
  // end = moment();

  start : any;
  end : any;
  dateFormatStr: any;
  constructor(public dateRangeSelectorSvc : DateRangeSelectorService) {

   }

  ngOnInit(): void {
debugger;

    $('a.ddRange').click(function () {
      $('a.dropdown-item.active').removeClass("active");
      $(this).addClass("active");
    });

// if (!$(this).hasClass("show-custom-range")) {
//   $(this).parents("ul").children().last().hide();
// } else {
//   $(this).parent().next().show();
// }

// $('.dropdown-submenu a.test').on("click", function(e){
//   $(this).next('ul').toggle();
//   e.stopPropagation();
//   e.preventDefault();
// });

    if(localStorage.getItem("isDateStored") === "true")
    {
      this.start = moment(localStorage.getItem("startDate"));
      this.end = moment(localStorage.getItem("endDate"));
    }
    else{
      this.start = moment().subtract(29, 'days');
      this.end = moment();
    }

    $('.daterange').daterangepicker({
       showDropdowns: true,
      //  singleDatePicker: true,
      // locale: {
      //   format: "MM/DD/YYYY",
      //   separator: " - ",
      //   applyLabel: "Apply",
      //   cancelLabel: "Cancel",
      //   fromLabel: "From",
      //   toLabel: "To",
      //   customRangeLabel: "Custom",
      //   weekLabel: "W",
      //   daysOfWeek: [
      //     "Su",
      //     "Mo",
      //     "Tu",
      //     "We",
      //     "Th",
      //     "Fr",
      //     "Sa"
      //   ],
      //   monthNames: [
      //     "January",
      //     "February",
      //     "March",
      //     "April",
      //     "May",
      //     "June",
      //     "July",
      //     "August",
      //     "September",
      //     "October",
      //     "November",
      //     "December"
      //   ],
      //   "firstDay": 1
      // },
      opens: 'left',
      startDate: this.start,
      endDate: this.end,
      minDate: moment().subtract(1,'years'),
      maxDate: moment(),
      // language: 'nl',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, this.dateRangeSelectorSvc.dateFormat);

    
    this.dateRangeSelectorSvc.dateFormat(this.start, this.end);
  }

  dateFormat(start, end) {
    debugger;
    localStorage.setItem("isDateStored","true");
    localStorage.setItem("startDate",start);
    localStorage.setItem("endDate",end);
    this.dateFormatStr = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
    $('.daterange span').html(this.dateFormatStr);
    
    $('.customDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
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
    this.dateFormat(this.start, this.end);

 }
 setCustomRange(){

 }

}
