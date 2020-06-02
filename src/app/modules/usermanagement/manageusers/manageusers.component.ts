import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { ExcelService } from 'src/app/utils/services/excel/excel.service';
import { CountryService } from 'src/app/utils/services/ngbootstraptables/country.service';
import { COUNTRIES } from 'src/app/utils/models/ngbootstraptables/countries';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public translate:TranslateService,
    private excelService:ExcelService,
    public service: CountryService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  exportAsXLSX():void {
    // this.service.countries$.subscribe(response =>{
    //   console.log("Country Response", response);
    //   this.excelService.exportAsExcelFile(response, 'sample');
    // });
    this.excelService.exportAsExcelFile(COUNTRIES, 'UserReport');

 }

}
