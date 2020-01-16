import {Component, Input, OnInit} from '@angular/core';
import {Components} from '../components';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  components = Components;

  @Input() columns: any[];
  @Input() _editable: any;

  constructor() { }

  ngOnInit() {
  }

}
