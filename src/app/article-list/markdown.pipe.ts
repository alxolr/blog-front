import {
  Pipe,
  PipeTransform
} from '@angular/core';

import * as marked from 'marked';
import 'prismjs';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string, options?: MarkedOptions) {
    if (markdown === '') {
      return '';
    }

    return marked(markdown, this.getOptions());
  }

  private getOptions(): MarkedOptions {
    return {
      highlight: (code, language) => {
        return Prism.highlight(code, Prism.languages[language]);
      }
    };
  }
}
