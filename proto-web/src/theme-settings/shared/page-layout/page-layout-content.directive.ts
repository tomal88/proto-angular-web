import { Directive } from '@angular/core';

@Directive({
  selector: '[protoPageLayoutContent],proto-page-layout-content',
  host: {
    class: 'proto-page-layout-content'
  }
})
export class PageLayoutContentDirective {

  constructor() { }

}
