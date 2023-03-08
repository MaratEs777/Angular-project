import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div
    class=" notification-div alert alert-success "
    [hidden]="displayNotification"
  >
    <p>
      Этот сайт использует файлы cookie от Google для предоставления своих услуг
      и анализа трафика.
    </p>
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: [
    '.notification-div{margin: 10px 0px; padding: 10px 20px; text-align:center; }',
    'p{font-size:14px; }',
    '.close{float: right; margin-top: -47px; margin-right: -15px;  }',
    '.btn{font-size:24px; color: red}',
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
