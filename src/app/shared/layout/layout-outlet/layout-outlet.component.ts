import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IdleTimeoutComponent } from '../../common-control/idle-timeout/idle-timeout/idle-timeout.component';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Idle, EventTargetInterruptSource } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-layout-outlet',
  templateUrl: './layout-outlet.component.html',
  styleUrls: ['./layout-outlet.component.scss'],
  entryComponents: [IdleTimeoutComponent]

})
export class LayoutOutletComponent implements OnInit,OnDestroy {
 

  idleState = 'NOT_STARTED';
  timedOut = false;
  lastPing?: Date = null;
  progressBarPopup: NgbModalRef;
  private idleOnIdleEnd$: Subscription;
  private idleOnTimeout$: Subscription;
  private idleOnIdleStart$: Subscription;
  private idleOnTimeoutWarning$: Subscription;
  public sidebarMenuOpened = true;
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  constructor(private renderer: Renderer2,
    private element: ElementRef, 
    public idle: Idle, 
    private keepalive: Keepalive, 
    private ngbModal: NgbModal,
    private authenticationService: AuthenticationService) {
     this.idleSessionTimeout();
  }

  idleSessionTimeout() {
    // sets an idle timeout of 15 minutes.
    this.idle.setIdle(environment.idleTimeout);
    // sets a timeout period of 5 minutes.
    this.idle.setTimeout(environment.idleTimeoutPeriod);
    // sets the interrupts like Keydown, scroll, mouse wheel, mouse down, and etc
    this.idle.setInterrupts([
      new EventTargetInterruptSource(
        this.element.nativeElement, 'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll')]);

   this.idleOnIdleEnd$ = this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NO_LONGER_IDLE';
    });

    this.idleOnTimeout$ = this.idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.timedOut = true;
      this.closeProgressForm();
    });

    this.idleOnIdleStart$ = this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE_START', this.openProgressForm(1);
    });

    this.idleOnTimeoutWarning$ = this.idle.onTimeoutWarning.subscribe((countdown: any) => {
      this.idleState = 'IDLE_TIME_IN_PROGRESS';
      this.progressBarPopup.componentInstance.count = (Math.floor((countdown - 1) / 60) + 1);
      this.progressBarPopup.componentInstance.progressCount = this.reverseNumber(countdown);
      this.progressBarPopup.componentInstance.countMinutes = (Math.floor(countdown / 60));
      this.progressBarPopup.componentInstance.countSeconds = countdown%60;
    });

    // sets the ping interval to 15 seconds
    this.keepalive.interval(environment.checkIdleTimeoutInterval);
    /**
     *  // Keepalive can ping request to an HTTP location to keep server session alive
     * keepalive.request('<String URL>' or HTTP Request);
     * // Keepalive ping response can be read using below option
     * keepalive.onPing.subscribe(response => {
     * // Redirect user to logout screen stating session is timeout out if if response.status != 200
     * });
     */
 

   
    this.reset();
  }

  ngOnInit() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'register-page'
    );
  }

  mainSidebarHeight(height) {
    // this.renderer.setStyle(
    //   this.contentWrapper.nativeElement,
    //   'min-height',
    //   height - 114 + 'px'
    // );
  }

  toggleMenuSidebar() {
    console.log('sidebarMenuCollapsed', this.sidebarMenuOpened);
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.sidebarMenuOpened = true;
    }
  }

  ngOnDestroy() {
     this.resetTimeOut();

  }

  reverseNumber(countdown: number) {
    return (environment.idleTimeoutPeriod - (countdown - 1));
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  openProgressForm(count: number) {
    this.progressBarPopup = this.ngbModal.open(IdleTimeoutComponent, {
      backdrop: 'static',
      keyboard: false
    });
    this.progressBarPopup.componentInstance.count = count;
    this.progressBarPopup.result.then((result: any) => {
      console.log("NgModalRef Result",result);
      if ((result !== '' && 'logout' === result) || result === 'undefined') {
        debugger;
        this.logout();
      } else {
        debugger;
        this.reset();
      }
    });
  }

  logout() {
    debugger;
     this.authenticationService.logout();
    this.resetTimeOut();
  }

  closeProgressForm() {
    this.progressBarPopup.close('logout');
  }

  resetTimeOut() {
    // this.idle.stop();
    // this.idle.onTimeout.unsubscribe();
    // this.idle.onIdleStart.unsubscribe();
    // this.idle.onTimeoutWarning.unsubscribe();
    // this.idle.onIdleEnd.unsubscribe();

    this.idleOnTimeout$.unsubscribe();
    this.idleOnIdleEnd$.unsubscribe();
    this.idleOnIdleStart$.unsubscribe();
    this.idleOnTimeoutWarning$.unsubscribe();
  }

}
