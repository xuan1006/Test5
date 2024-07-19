import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  template: `
    <div class="circle-button" (click)="handleClick()">{{ label }}</div>
  `,
  styles: [`
    .circle-button {
      /*圓形按鈕*/
      width: 40px;
      height: 40px;
      background-color: #ffffff;
      border: 1px solid #8f8c8c;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .circle-button:hover {
      background-color: rgba(239, 5, 5, 0.55);
    }
  `],
  standalone: true
})
export class CircleButtonComponent {
  @Input() label: string = '+';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
