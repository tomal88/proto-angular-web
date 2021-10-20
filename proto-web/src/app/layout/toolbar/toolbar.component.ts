import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { ThemeService } from '../../../theme-settings/services/theme.service';

@Component({
  selector: 'proto-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  @HostBinding('class.no-box-shadow')
  hasNavigation: boolean | undefined;

  @Output() openSidenav = new EventEmitter();
  @Output() openQuickPanel = new EventEmitter();

  topNavigation$ = this.themeService.config$.pipe(map(config => config.navigation === 'top'));

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() { }


}
