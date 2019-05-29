import {Component, Input, OnInit} from '@angular/core';
import {SearchResultItem} from '../../models/search-result.model';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() data: SearchResultItem;


  constructor() {
  }


  ngOnInit() {

  }

}
