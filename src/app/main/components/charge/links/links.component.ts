import { ChargeLinkReferenceEnum, ChargeLinkReferenceEnumLabels } from './../../../enum/charge-link-reference-enum';
import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChargeLink } from 'src/app/main/api/charge-link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  records!: Array<ChargeLink>;
  chargeLinkReferenceEnumLabels: Record<ChargeLinkReferenceEnum, string> = ChargeLinkReferenceEnumLabels

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) {
    if(this.config.data) {
      this.records = this.config.data;
    } else {
      this.records = [];
    }
  }
}
