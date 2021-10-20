import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackdropModule } from '../../theme-settings/shared/backdrop/backdrop.module';
import { LoadingIndicatorModule } from '../../theme-settings/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from '../../theme-settings/shared/material-components.module';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ConfigPanelModule } from './config-panel/config-panel.module';
import { NavigationModule } from './navigation/navigation.module';
import { ThemeModule } from '../../theme-settings/theme.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    ThemeModule,

    // Core
    ToolbarModule,
    SidenavModule,
    FooterModule,
    BackdropModule,
    ConfigPanelModule,
    NavigationModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {
}
