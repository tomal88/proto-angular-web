import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../theme-settings/animations/fade-in-up.animation';
import { AuthService } from '../auth.service';

@Component({
  selector: 'proto-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(32)]]
  });

  inputType = 'password';
  visible = false;
  isLoading = false;
  errorText = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  send() {
    this.errorText = null;
    this.isLoading = true;
    this.authService.signIn(this.form.value)
      .subscribe({
        next: _ => this.router.navigate(['/']),
        error: e => this.errorText = e.error.message,
        complete: () => this.isLoading = false
      }).add(() => this.isLoading = false);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}
