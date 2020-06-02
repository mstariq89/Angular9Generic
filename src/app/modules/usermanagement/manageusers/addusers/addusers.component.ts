import { Component, OnInit } from '@angular/core';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {

  
  constructor(private sweetalertSvc : Sweetalert2Service) { }

  ngOnInit(): void {
  }

  addClinic(){
    // const toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000
    // });
    // Toast.fire({
    //   type: 'success',
    //   title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    // })

    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   onOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //   }
    // })
    
    // Toast.fire({
    //   icon: 'success',
    //   title: 'User added successfully'
    // })

    this.sweetalertSvc.sweetalertShow('success','User added successfully',"Now you can view the added Users");

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 3000
    // })
  }

}
