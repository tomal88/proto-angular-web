import { Directive } from '@angular/core';

@Directive({
  selector: '[protoPage],proto-page',
  host: {
    class: 'proto-page'
  }
})
export class PageDirective {

  constructor() { }

}
