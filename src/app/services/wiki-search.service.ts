import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SearchResultItem} from '../models/search-result.model';
import {LocalStorageService} from './local-storage.service';
import {SearchHistoryItem} from '../models/search-history-item.model';

const BASE_WIKI_URL = 'https://ru.wikipedia.org/w/api.php';
const DEFAULT_QUERY_PARAMS = {format: 'json', action: 'opensearch', prop: 'info', origin: '*'};
const HISTORY_KEY = 'searchHistory';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {
  constructor(private http: HttpClient,
              private localStorageSvc: LocalStorageService) {
  }

  search(query: string): Observable<SearchResultItem[]> {
    this.saveToHistory(query);
    return this.http.get(BASE_WIKI_URL,
      {params: {search: query, ...DEFAULT_QUERY_PARAMS}}
    ).pipe(
      map((searchResults) => {
        const titles = searchResults[1];
        const descriptions = searchResults[2];
        const links = searchResults[3];
        const results = [];
        if (!searchResults || !titles.length) {
          return;
        }

        for (let i = 0; i < titles.length - 1; i++) {
          const result = new SearchResultItem(titles[i], descriptions[i], links[i]);
          results.push(result);
        }
        return results;
      })
    );
  }

  saveToHistory(query: string) {
    let currentHistory = this.getHistory();
    currentHistory = currentHistory ? currentHistory : [];
    const historyItem = new SearchHistoryItem(query, new Date());
    currentHistory.push(historyItem);
    this.localStorageSvc.setItem(HISTORY_KEY, currentHistory);
  }

  getHistory(): SearchHistoryItem[] {
    return this.localStorageSvc.getItem(HISTORY_KEY);
  }






}


