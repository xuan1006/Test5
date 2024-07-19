import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-colored-button',
  template: `
    <button (click)="handleClick()" [ngClass]="colorClass">{{ label }}</button>
  `,
  styles: [`
    button {
      /*按鈕*/
      background-color: rgba(250, 137, 6, 0.94);
      color: #ffffff;
      border: 1px solid #8f8c8c;
      padding: 10px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      /*按鈕碰到後顏色*/
      background-color: rgb(9, 198, 243);
    }
  `],
  imports: [
    NgClass
  ],
  standalone: true
})
export class ColoredButtonComponent {
  @Input() label: string = '';
  @Input() colorClass: string = '';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
