import { Component } from '@angular/core';
import { environment } from '../../environments/environments.qa';
import { NewsModel } from '../models/news-model';
import { httpGet } from '../utils/http-utils';
import { NewsBoxComponent } from "../news-box/news-box.component";

@Component({
  selector: 'app-news-page',
  imports: [NewsBoxComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  
  topHeadlines: NewsModel[] = [];

  ngOnInit() {
    
    this.getTopHeadlines('us').then((news: NewsModel[]) => {
      this.topHeadlines = news
      console.log('topHeadlines', this.topHeadlines)
    });
  }
  

  async getTopHeadlines(country: string): Promise<NewsModel[]> {

    const parameters = JSON.stringify({
        country: country,
        url: environment.api_url
    })
  
    const data = await httpGet(parameters)

    const news: NewsModel[] = data.articles.map((article: any) => {
        return {
            source: article.source,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content
        }
    })
    
    console.log('news', news)
    return news
  }
}
