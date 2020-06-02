import { Component, OnInit } from '@angular/core';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.scss']
})
export class AddrolesComponent implements OnInit {

  constructor(private sweetalertSvc : Sweetalert2Service) { }

  ngOnInit(): void {
  }

  addRoles(){
    this.sweetalertSvc.sweetalertShow('success','Roles added successfully',"Now you can view the added Roles");
  }

}
