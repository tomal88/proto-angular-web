import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'proto-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() current: string | undefined;
  @Input() crumbs: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
