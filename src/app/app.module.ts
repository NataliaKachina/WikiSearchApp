import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {WikiSearchService} from './services/wiki-search.service';
import {WikiSearchPageComponent} from './components/wiki-search-page/wiki-search-page.component';
import {WikiSearchBarComponent} from './components/wiki-search-bar/wiki-search-bar.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiSearchPageComponent,
    WikiSearchBarComponent,
    SearchResultComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WikiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
