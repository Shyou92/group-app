import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'group-app';

  constructor(private readonly httpClient: HttpClient) {}

  private readonly url = '../assets/data.json';

  slides: Record<string, any>[];

  ngOnInit(): void {
    this.httpClient
      .get(this.url)
      .pipe(
        take(1),
        map((slide: Record<string, any>) =>
          Object.keys(slide).map((key) => slide[key])
        )
      )
      .subscribe((slides) => {
        this.slides = slides;
      });
  }
}
