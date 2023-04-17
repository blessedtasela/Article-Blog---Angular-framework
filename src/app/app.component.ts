import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  header = 'Berliz Article Voting Blog';
   articles: Article[];

  constructor() {
    this.articles = [
      new Article("Google Homepage", 'https://google.com', 5),
      new Article("Instagram Homepage", 'https://instagram.com', 15),
      new Article("Facebook Homepage", 'https://facebook.com', 3)
    ]
  }
  ngOnInit(): void {
  }
    
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
      console.log(`Adding article. Title: ${title.value}, Link: ${link.value}`)
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
    }

    sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}

