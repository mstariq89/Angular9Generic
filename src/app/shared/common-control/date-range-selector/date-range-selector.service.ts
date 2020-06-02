import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class DateRangeSelectorService {
  public dateRangeSelector = new BehaviorSubject<any>(null);
  dateRange = this.dateRangeSelector.asObservable();

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  dateFormatStr: any;

  constructor() { }

  setLocalStorage(dateFormat) {
    debugger;
    

    this.dateRangeSelector.next(dateFormat);
    // $('.daterange span').html(dateFormat);
    // $('.customDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  dateFormat(start, end) {
    debugger;
    
    localStorage.setItem("isDateStored","true");
    localStorage.setItem("startDate",start);
    localStorage.setItem("endDate",end);
    this.dateFormatStr = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
    $('.daterange span').html(this.dateFormatStr);
    //  this.dateRangeSelector.next(this.dateFormatStr);
    //$('.customDateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }
}
