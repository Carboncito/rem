import { Component, Input } from '@angular/core';
import { Video } from '../../services';

@Component({
  selector: 'app-card-video',
  standalone: true,
  imports: [],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
  @Input() video: Video = {
    Title: '',
    Year: '',
    imdbID: '',
    Type: '',
    Poster: '',
  };
}
