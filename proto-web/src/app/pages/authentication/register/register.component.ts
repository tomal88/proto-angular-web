import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../theme-settings/animations/fade-in-up.animation';

@Component({
  selector: 'proto-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUpAnimation]
})
export class RegisterComponent implements OnInit {

  matchPassword = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
        return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
        return { confirm: true, error: true };
    } return {}
  }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    confirmPassword: ['', [Validators.required, this.matchPassword]],
  });

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/']);
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
