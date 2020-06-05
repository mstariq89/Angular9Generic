import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() dateRangeSelection = new EventEmitter<{ from: Date, to: Date }>();

  start: any;
  end: any;
  dateFormatStr: any;
  constructor(public dateRangeSelectorSvc: DateRangeSelectorService) {

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

    if (localStorage.getItem("isDateStored") === "true") {
      this.start = moment(localStorage.getItem("startDate"));
      this.end = moment(localStorage.getItem("endDate"));
    }
    else {
      this.start = moment().subtract(29, 'days');
      this.end = moment();
    }

    const onDateSelected = (start, end) => {
      this.setDateRangeVal(start, end);
    };

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
      minDate: moment().subtract(1, 'years'),
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
    }, onDateSelected);

    // $('.daterange').on('apply.daterangepicker', function(ev, picker) {
    //   console.log(picker.startDate.format('YYYY-MM-DD'));
    //   console.log(picker.endDate.format('YYYY-MM-DD'));

    // });




    this.onDateSelected(this.start, this.end);


  }

  onDateSelected(startDate, endDate) {
    debugger;
    this.setDateRangeVal(startDate, endDate);
  }
  
  setDateRangeVal(startDate, endDate) {
    localStorage.setItem("isDateStored", "true");
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    this.dateFormatStr = startDate.format('MMMM D, YYYY') + ' - ' + endDate.format('MMMM D, YYYY');
    $('.daterange span').html(this.dateFormatStr);

    //$('.customDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

    this.emitDateRangePicker(startDate,endDate);
  }

  emitDateRangePicker(startDate,endDate){
    const dateRange = {
      from: startDate,
      to: endDate
    };
    this.dateRangeSelection.emit(dateRange);
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
    this.onDateSelected(this.start, this.end);

  }
  setCustomRange() {

  }

}
