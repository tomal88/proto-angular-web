import { Directive } from '@angular/core';

@Directive({
  selector: '[protoTitle],proto-title',
  host: {
    class: 'proto-title'
  }
})
export class TitleDirective {

  constructor() { }

}
