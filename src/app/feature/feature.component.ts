import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() name: string;
  @Input() _editable: string;
  @Input() thumb: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
