import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ListColumn } from './list-column.model';

@Component({
  selector: 'proto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements AfterViewInit {

  @Input() name: string | undefined;
  @Input() columns: ListColumn[] | undefined;

  @ViewChild('filter') filter: ElementRef | undefined;
  @Output() filterChange = new EventEmitter<string>();

  @Input() hideHeader: boolean | undefined;

  constructor() {
  }

  ngAfterViewInit() {
    if (!this.hideHeader) {
      fromEvent(this.filter?.nativeElement, 'keyup').pipe(
        distinctUntilChanged(),
        debounceTime(150)
      ).subscribe(() => {
        this.filterChange.emit(this.filter?.nativeElement.value);
      });
    }
  }

  toggleColumnVisibility(column: { visible: boolean; }, event: { stopPropagation: () => void; stopImmediatePropagation: () => void; }) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
}
