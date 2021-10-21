import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from 'src/theme-settings/shared/scrollbar/scrollbar.module';
import { MaterialModule } from '../../../theme-settings/shared/material-components.module';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ScrollbarModule
  ],
  declarations: [SidenavComponent, SidenavItemComponent],
  exports: [SidenavComponent],
  providers: [SidenavService]
})
export class SidenavModule {
}
