import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  themes: string[];
  theme: string;
  theme$: Observable<string>;


  constructor(private themeService: ThemeService) {
    this.theme$ = themeService.theme$;
    this.themeService.theme$
      .subscribe(theme => {
        this.theme = theme;
      });
  }

  ngOnInit() {
    this.themes = this.themeService.themes;
  }

  setTheme(newTheme: string) {
    this.themeService.setTheme(newTheme);
  }

}
