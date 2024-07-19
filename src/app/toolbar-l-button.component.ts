import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-l-button',
  template: `
    <button (click)="handleClick()" [class.active]="isActive">{{ label }}</button>
  `,
  styles: [`
    button {
      /*按鈕*/
      background-color: rgba(255, 255, 255, 0.94);
      color: #100101;
      border: none; /* 移除邊線 */
      padding: 10px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      /*按鈕碰到後顏色*/
      background-color: rgba(143, 152, 159, 0.62);
    }

    button.active {
      /*按鈕激活狀態顏色*/
      background-color: rgba(143, 152, 159, 0.65);
    }
  `],
  standalone: true
})
export class ToolbarLButtonComponent {
  @Input() label: string = '';
  @Output() clicked = new EventEmitter<void>();

  isActive: boolean = false;

  handleClick() {
    this.isActive = !this.isActive; // 切換激活狀態
    this.clicked.emit();
  }
}
