import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  @Output() reset = true;
  constructor() { }

  resetView() {
    setTimeout(() => this.reset = false);
    setTimeout(() => this.reset = true);
  }
}
