import { Component, input } from '@angular/core';

@Component({
  selector: 'app-news-box',
  imports: [],
  templateUrl: './news-box.component.html',
  styleUrl: './news-box.component.scss'
})
export class NewsBoxComponent {
  source = input('source');
  author = input('author');
  title = input('title');
  description = input('description');
  url = input('url');
  urlToImage = input('urlToImage');
  publishedAt = input('publishedAt');
  content = input('content');

}

