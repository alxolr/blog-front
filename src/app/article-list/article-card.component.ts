import {
  Component,
  Input
} from '@angular/core';
import {
  Router
} from '@angular/router';

import { Article } from './article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  @Input() article: Article;

  constructor(private router: Router) { }

  gotoDetails() {
    this.router.navigate(['/article', this.article.slug]);
  }
};
