import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ProtoCard,
  ProtoCardActions,
  ProtoCardContent,
  ProtoCardHeader,
  ProtoCardHeaderActions,
  ProtoCardHeaderSubTitle,
  ProtoCardHeaderTitle
} from './card.component';

const cardComponents = [
  ProtoCard,
  ProtoCardHeader,
  ProtoCardHeaderTitle,
  ProtoCardHeaderSubTitle,
  ProtoCardHeaderActions,
  ProtoCardContent,
  ProtoCardActions
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...cardComponents
  ],
  exports: [
    ...cardComponents
  ]
})
export class ProtoCardModule {
}
