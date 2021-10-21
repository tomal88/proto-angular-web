import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../../theme-settings/shared/material-components.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule {
}
