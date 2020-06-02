import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { NgxSpinnerService } from 'ngx-spinner';
import { Sweetalert2Service } from '../sweetalert2/sweetalert2.service';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private spinner: NgxSpinnerService,private sweetalertSvc : Sweetalert2Service) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    this.spinner.show();
 
    setTimeout(() => {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      const workbook: XLSX.WorkBook = { Sheets: { 'UserReports': worksheet }, SheetNames: ['UserReports'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.sweetalertSvc.sweetalertShow('success','Excel Report downloaded successfully',"Now you can view the downloaded report");

    }, 1500);
    
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
     const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
     FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);

  }
  
}
