import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchHistoryItem} from '../../models/search-history-item.model';
import {WikiSearchService} from '../../services/wiki-search.service';

@Component({
  selector: 'wiki-search-bar',
  templateUrl: './wiki-search-bar.component.html',
  styleUrls: ['./wiki-search-bar.component.css']
})
export class WikiSearchBarComponent implements OnInit {
  ngOnInit(): void {
    this.history = this.searchService.getHistory();
  }

  @Output() onSearch = new EventEmitter<string>();

  // TODO добавить поиск по Enter
  query: string;

  history: SearchHistoryItem[];


  constructor(private searchService: WikiSearchService ) {
  }

}
