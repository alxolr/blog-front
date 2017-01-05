import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import './rxjs-extensions';
import { ArticleService } from './article-list/article.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ArticleListComponent }
    ])
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
