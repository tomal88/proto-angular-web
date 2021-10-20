import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'proto-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'proto-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class protoCard {
}

// noinspection TsLint
@Component({
  selector: 'proto-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'proto-card-header' },
  template: `
    <div class="proto-card-header-heading-group">
      <ng-content select="proto-card-header-heading"></ng-content>
      <ng-content select="proto-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="proto-card-header-actions"></ng-content>
  `
})
export class ProtoCardHeader {
}

// noinspection TsLint
@Component({
  selector: 'proto-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'proto-card-content' },
  template: `
    <ng-content></ng-content>`
})
export class ProtoCardContent {
}

// noinspection TsLint
@Directive({
  selector: 'proto-card-header-heading',
  host: { 'class': 'proto-card-header-heading' }
})
export class ProtoCardHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'proto-card-header-subheading',
  host: { 'class': 'proto-card-header-subheading' }
})
export class ProtoCardHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'proto-card-header-actions',
  host: { 'class': 'proto-card-header-actions' }
})
export class ProtoCardHeaderActions {
}

// noinspection TsLint
@Directive({
  selector: 'proto-card-actions',
  host: {
    'class': 'proto-card-actions',
    '[class.proto-card-actions-align-end]': 'align === "end"',
  }
})
export class ProtoCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
