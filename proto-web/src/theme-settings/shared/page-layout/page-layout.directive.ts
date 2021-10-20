import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[protoPageLayout],proto-page-layout',
  host: {
    class: 'proto-page-layout'
  }
})
export class PageLayoutDirective {

  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() { }

  @HostBinding('class.proto-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.proto-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }

}
