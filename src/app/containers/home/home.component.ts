import { ChangeDetectionStrategy, Component } from '@angular/core';
import { authorInfo } from '../../author-info';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly authorInfo = authorInfo;

  readonly carouselItems = [
    { src: 'carousel-images/html.svg', alt: 'HTML logo' },
    { src: 'carousel-images/css.svg', alt: 'CSS logo' },
    { src: 'carousel-images/javascript.svg', alt: 'JavaScript logo' },
    { src: 'carousel-images/typescript.svg', alt: 'TypeScript logo' },
    { src: 'carousel-images/angular.svg', alt: 'Angular logo' },
    { src: 'carousel-images/ngrx.svg', alt: 'NgRx logo' },
    { src: 'carousel-images/rxjs.svg', alt: 'RxJS logo' },
    { src: 'carousel-images/python.svg', alt: 'Python logo' },
  ];
}
