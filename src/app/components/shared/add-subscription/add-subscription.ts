import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.html'
})

export class AddSubscription {
  @Output() onSubscribe: EventEmitter<any> = new EventEmitter();
  @Input() projectId: number;
  @Input() plans: any = [];

  onSubscribeSuccess(subscription) {
    this.onSubscribe.emit(subscription);
  }
}
