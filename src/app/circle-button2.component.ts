import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle-button2',
  template: `
    <div class="circle-button2" (click)="handleClick()">{{ label }}</div>
  `,
  styles: [`
    .circle-button2 {
      /*圓形按鈕*/
      width: 15px;
      height: 15px;
      background-color: #ffffff;
      border: 1px solid #8f8c8c;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      right: 50px;
      top: 190px;
    }

    .circle-button2:hover {
      background-color: rgba(158, 38, 189, 0.58);
    }
  `],
  standalone: true
})
export class CircleButtonComponent2 {
  @Input() label: string = '+';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
