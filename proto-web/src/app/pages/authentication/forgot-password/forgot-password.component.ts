import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../theme-settings/animations/fade-in-up.animation';

@Component({
  selector: 'proto-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ForgotPasswordComponent implements OnInit {

  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}
