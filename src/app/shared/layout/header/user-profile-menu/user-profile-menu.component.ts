import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app/app.service';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
})
export class UserProfileMenuComponent implements OnInit {
  public user;

  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private appService: AppService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.user = this.appService.user;
  }

  toggleDropdownMenu() {
    debugger;
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }

  logout() {
    // this.appService.logout1();
    // localStorage.removeItem("isDateStored");
    Swal.fire({
      width:'30rem',
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.authenticationService.logout();
      }
    })
    // this.authenticationService.logout();

  }
  
}
