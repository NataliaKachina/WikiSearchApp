import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  themes: string[];
  theme: string;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themes = this.themeService.themes;
  }

  setTheme(newTheme: string) {
    this.themeService.setTheme(newTheme);
  }

}
