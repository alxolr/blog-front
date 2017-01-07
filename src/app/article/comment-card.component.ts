import {
  Component,
  Input
} from '@angular/core';

import { Comment } from '../article-list/article';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent {
  @Input() comment: Comment;
}
