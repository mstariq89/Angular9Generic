import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  constructor() { }

  sweetalertShow(msgIcon,msgText,msgFooter){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: msgIcon,
      title: msgText,
      footer: msgFooter
    })
  }

  sweetalertDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
      }
    })
  }
}
