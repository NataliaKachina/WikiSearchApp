import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from './local-storage.service';

const THEME_KEY = 'theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private localStorageSvc: LocalStorageService) {
  }

  theme$ = new BehaviorSubject<string>('_default');
  themes = ['_default', '_dark'];

  setTheme(theme: string) {
    this.theme$.next(theme);
    this.localStorageSvc.setItem(THEME_KEY, theme);
  }


  restoreTheme() {
    const theme = this.localStorageSvc.getItem(THEME_KEY);
    this.theme$.next(theme);
}
}
