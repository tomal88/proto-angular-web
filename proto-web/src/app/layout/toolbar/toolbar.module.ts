import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from 'src/theme-settings/shared/scrollbar/scrollbar.module';
import { ProtoCardModule } from '../../../theme-settings/shared/card/card.module';
import { ClickOutsideModule } from '../../../theme-settings/shared/click-outside/click-outside.module';
import { MaterialModule } from '../../../theme-settings/shared/material-components.module';
import { ToolbarFullscreenToggleComponent } from './toolbar-fullscreen-toggle/toolbar-fullscreen-toggle.component';
import { ToolbarSearchBarComponent } from './toolbar-search-bar/toolbar-search-bar.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ToolbarSidenavMobileToggleComponent } from './toolbar-sidenav-mobile-toggle/toolbar-sidenav-mobile-toggle.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ClickOutsideModule,
    ProtoCardModule,
    ScrollbarModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarUserComponent,
    ToolbarSearchComponent,
    ToolbarSearchBarComponent,
    ToolbarFullscreenToggleComponent,
    ToolbarSidenavMobileToggleComponent
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
