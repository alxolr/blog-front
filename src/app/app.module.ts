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
import { ArticleCardComponent } from './article-list/article-card.component';
import { MarkdownPipe } from './article-list/markdown.pipe';
import { SlicePipe } from './article-list/slice.pipe';
import { ArticleComponent } from './article/article.component';
import { CommentCardComponent } from './article/comment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleCardComponent,
    MarkdownPipe,
    SlicePipe,
    ArticleComponent,
    CommentCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ArticleListComponent },
      { path: 'article/:slug', component: ArticleComponent }
    ])
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
