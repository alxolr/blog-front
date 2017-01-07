import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Params
} from '@angular/router';

import { ArticleService } from '../article-list/article.service';
import { Article } from '../article-list/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        console.log(params);
        
        return this.articleService.getArticleBySlug(params['slug']);
      })
      .subscribe((article: Article) => this.article = article);
  }
}
