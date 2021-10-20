import { Directive } from '@angular/core';

@Directive({
  selector: '[protoPageLayoutHeader],proto-page-layout-header',
  host: {
    class: 'proto-page-layout-header'
  }
})
export class PageLayoutHeaderDirective {

  constructor() { }

}

