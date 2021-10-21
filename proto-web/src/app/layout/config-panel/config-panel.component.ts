import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from '../../../theme-settings/services/theme.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SidenavService } from '../sidenav/sidenav.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'proto-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent implements OnInit {

  activeTheme$ = this.themeService.activeTheme$;
  navigation$ = this.themeService.config$.pipe(map(config => config.navigation));
  sidenavOpen$ = this.sidenavService.open$;
  sidenavCollapsed$ = this.sidenavService.collapsed$;
  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));
  toolbarVisible$ = this.themeService.config$.pipe(map(config => config.toolbarVisible));
  toolbarPosition$ = this.themeService.config$.pipe(map(config => config.toolbarPosition));
  footerVisible$ = this.themeService.config$.pipe(map(config => config.footerVisible));
  footerPosition$ = this.themeService.config$.pipe(map(config => config.footerPosition));

  constructor(private themeService: ThemeService,
              private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  setActiveTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  sidenavOpenChange(change: MatSlideToggleChange) {
    change.checked ? this.sidenavService.open() : this.sidenavService.close();
  }

  sidenavCollapsedChange(change: MatCheckboxChange) {
    this.sidenavService.setCollapsed(change.checked);
  }
}
