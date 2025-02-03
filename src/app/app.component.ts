import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsPageComponent } from "./news-page/news-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'news-app';
}
