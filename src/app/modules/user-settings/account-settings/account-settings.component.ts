import { Component, OnInit, ElementRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  labelImport: ElementRef;

  fileToUpload: File = null;
  constructor(private spinner: NgxSpinnerService, private sweetalertSvc: Sweetalert2Service) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }

  updateUserProfile() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.sweetalertSvc.sweetalertShow("success", "Profile updated successfully", "Now you can view the updated details");

    }, 1500);
  }

}
