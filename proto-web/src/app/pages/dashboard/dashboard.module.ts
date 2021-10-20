import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { ThemeModule } from '../../../theme-settings/theme.module';
import { MaterialModule } from 'src/theme-settings/shared/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ThemeModule,

    // Widgets
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
