import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  constructor(private renderer: Renderer2,private router:Router,
    public translate : TranslateService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, Validators.required),
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }

  forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.router.navigate(['/recover-password'], { queryParams: { user: 123 } });
    } 
  }
}
