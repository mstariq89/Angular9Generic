import { Component, OnInit } from '@angular/core';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-addclinics',
  templateUrl: './addclinics.component.html',
  styleUrls: ['./addclinics.component.scss']
})
export class AddclinicsComponent implements OnInit {

  constructor(private sweetalertSvc: Sweetalert2Service) { }

  ngOnInit(): void {
  }

  addClinics() {
    this.sweetalertSvc.sweetalertShow("success", "Clinics added successfully","Now you can view the added Clinics");
  }

}
