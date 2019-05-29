import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchHistoryItem} from '../../models/search-history-item.model';
import {WikiSearchService} from '../../services/wiki-search.service';
import {Observable} from 'rxjs';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'wiki-search-bar',
  templateUrl: './wiki-search-bar.component.html',
  styleUrls: ['./wiki-search-bar.component.css']
})
export class WikiSearchBarComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();


  // TODO добавить поиск по Enter
  query: string;

  history: SearchHistoryItem[];
  theme$: Observable<string>;


  constructor(private searchService: WikiSearchService,
              themeService: ThemeService) {
    this.theme$ = themeService.theme$;
  }


  ngOnInit(): void {
    this.history = this.searchService.getHistory();
  }

}
