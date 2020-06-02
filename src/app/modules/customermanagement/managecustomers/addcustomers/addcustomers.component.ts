import { Component, OnInit } from '@angular/core';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss']
})
export class AddcustomersComponent implements OnInit {

  constructor(private sweetalertSvc: Sweetalert2Service) { }

  ngOnInit(): void {
  }

  addCustomers() {
    this.sweetalertSvc.sweetalertShow("success", "Customers added successfully","Now you can view the added Customers");
  }

}
