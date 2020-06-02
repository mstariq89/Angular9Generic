import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(private renderer: Renderer2,public translate : TranslateService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }

}
