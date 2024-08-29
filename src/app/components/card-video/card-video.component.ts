import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Watchlist } from '../../models';
import { IconComponent } from '../icon';

@Component({
  selector: 'app-card-video',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
  @Input() video: Watchlist = {
    title: '',
    year: '',
    videoId: '',
    type: '',
    poster: '',
  };
  @Input() isSaved: boolean = false;
  @Output() addClicked: EventEmitter<void> = new EventEmitter<void>();

  onClickAdd() {
    this.addClicked.emit();
  }
}
