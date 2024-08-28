import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
      [class]="class"
    >
      <path
        d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"
      />
    </svg>
  `,
})
export class BookmarkIconComponent {
  @Input() class = '';
}
