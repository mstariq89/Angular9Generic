import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-idle-timeout',
  templateUrl: './idle-timeout.component.html',
  styleUrls: ['./idle-timeout.component.scss']
})
export class IdleTimeoutComponent implements OnInit {

  @Input() countMinutes: number;
  @Input() countSeconds: number;
  @Input() progressCount: number;

  progressMaxVal = environment.idleTimeoutPeriod;
  
  constructor(public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService) {
  }
  continue() {
    this.activeModal.close(null);
  }
  logout() {
    this.activeModal.close('logout');
    // this.authenticationService.logout();
  }

  ngOnInit(): void {
  }

}
