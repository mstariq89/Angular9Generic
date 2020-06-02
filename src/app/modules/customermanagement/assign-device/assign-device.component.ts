import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-assign-device',
  templateUrl: './assign-device.component.html',
  styleUrls: ['./assign-device.component.scss']
})
export class AssignDeviceComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,public translate: TranslateService,
    private sweetalertSvc: Sweetalert2Service) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  assignDevice(){
    this.sweetalertSvc.sweetalertShow("success","Device assigned successfully","Now you can view the assigned Devices");
  }

}
