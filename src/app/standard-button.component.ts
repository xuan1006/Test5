import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  template: `
    <button (click)="handleClick()" [class.active]="isActive">{{ label }}</button>
  `,
  styles: [`
    button {
      /*按鈕*/
      background-color: rgba(255, 255, 255, 0.94);
      color: #100101;
      border: 1.2px solid #8f989f; /* 移除邊線 */
      padding: 10px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      /*按鈕碰到後顏色*/
      background-color: rgba(235, 243, 9, 0.59);
    }

  `],
  standalone: true
})
export class StandardButtonComponent {
  @Input() label: string = '';
  @Output() clicked = new EventEmitter<void>();

  isActive: boolean = false;

  handleClick() {
    this.isActive = !this.isActive; // 切換激活狀態
    this.clicked.emit();
  }
}
