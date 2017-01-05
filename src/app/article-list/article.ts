
export class Author {
  firstname: string;
  lastname: string;
  _id: string;
}

export class Comment {
  message: string;
  author: Author;
  created_at: Date;
  updated_at: Date;
}

export class Article {
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
  author: Author;
  image: string;
  comments: Comment[];
}
