import {Component, Input, OnInit} from '@angular/core';
import {SearchResultItem} from '../../models/search-result.model';
import {ThemeService} from '../../services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() data: SearchResultItem;
  theme$: Observable<string>;


  constructor(private themeService: ThemeService) {
    this.theme$ = themeService.theme$;
  }

  ngOnInit() {

  }

}
