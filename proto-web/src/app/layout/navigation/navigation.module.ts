import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ThemeModule } from '../../../theme-settings/theme.module';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  declarations: [NavigationComponent, NavigationItemComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
