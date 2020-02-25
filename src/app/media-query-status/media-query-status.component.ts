import {Component} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';

/**
 * Copied from flex-layout StackBlitz template.
 */
@Component({
  selector: 'media-query-status',
  template: `
    <div class="mqInfo">
      Active MediaQuery(s):
      <ul>
        <li *ngFor="let change of (media$ | async) as changes">
          {{change.mqAlias}} = {{change.mediaQuery}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./media-query-status.component.css'],
})
export class MediaQueryStatusComponent {
  media$: Observable<MediaChange[]>;

  constructor(media: MediaObserver) {
    this.media$ = media.asObservable();
  }
}
