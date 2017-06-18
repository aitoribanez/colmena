import { Component, Input } from '@angular/core'
import { UiTabLink } from '../tabs/tabs.interface'

@Component({
  selector: 'ui-page',
  template: `
    <div class="card">
      <div class="card-header">
        <ng-content select="header"></ng-content>
        <ui-tabs [tabs]="tabs"></ui-tabs>
      </div>
      <div class="card-block">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      padding-bottom: 0;
    }
  `],
})
export class UiPageComponent {

  @Input() tabs: UiTabLink[]

}
