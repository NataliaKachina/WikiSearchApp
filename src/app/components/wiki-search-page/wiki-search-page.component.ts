import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SearchResultItem} from '../../models/search-result.model';
import {WikiSearchService} from '../../services/wiki-search.service';
import {switchMap} from 'rxjs/operators';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'wiki-search-page',
  templateUrl: './wiki-search-page.component.html',
  styleUrls: ['./wiki-search-page.component.css']
})
export class WikiSearchPageComponent implements OnInit {

  results$: Observable<SearchResultItem[]>;
  searchQuery$ = new Subject<string>();
  theme$: Observable<string>;


  constructor(private searchService: WikiSearchService,
              themeService: ThemeService) {
    this.theme$ = themeService.theme$;
  }

  search(query: string) {
    this.searchQuery$.next(query);
  }


  ngOnInit() {
    this.results$ = this.searchQuery$
      .pipe(
        switchMap(query => this.searchService.search(query))
      );
  }
}
