import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
  }

  theme$ = new BehaviorSubject<string>('_default');
  themes = ['_default', '_dark'];

  setTheme(theme: string) {
    this.theme$.next(theme);
  }
}
