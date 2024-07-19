import { Component } from '@angular/core';
import { CircleButtonComponent } from './circle-button.component';
import { StandardButtonComponent } from './standard-button.component';
import { ColoredButtonComponent } from './colored-button.component';
import {CircleButtonComponent2} from "./circle-button2.component";
import { MatIconModule } from '@angular/material/icon';
import {ToolbarLButtonComponent} from "./toolbar-l-button.component";
import {ToolbarRButtonComponent} from "./toolbar-r-button.component";

@Component({
  selector: 'app-root',
  template: `
    <body>
    <div class="task-form">

      <input type="text" placeholder="Task title..." />

      <app-circle-button label="+" (clicked)="toggleTask()"></app-circle-button>

      <div class="actions">
        <div class="actions-left">
          <app-standard-button label="O Assign"></app-standard-button>
          <app-standard-button label="[] Due Date"></app-standard-button>
        </div>
      </div>

      <p>Description</p>
      <app-circle-button2 label="?" (clicked)="toggleDescription()"></app-circle-button2>

      <div class="toolbar-container">
        <div class="toolbar">
          <div class="toolbar-left">
            <app-toolbar-l-button label="B"></app-toolbar-l-button>
            <app-toolbar-l-button label="I"></app-toolbar-l-button>
            <app-toolbar-l-button label="U"></app-toolbar-l-button>
            <app-toolbar-l-button label="S"></app-toolbar-l-button>
            <app-toolbar-l-button label="C"></app-toolbar-l-button>
            <app-toolbar-l-button label="Tt"></app-toolbar-l-button>
            <app-toolbar-l-button label="N"></app-toolbar-l-button>
            <app-toolbar-l-button label="M"></app-toolbar-l-button>
            <app-toolbar-l-button label="O"></app-toolbar-l-button>
          </div>
          <div class="toolbar-right">
            <app-toolbar-r-button label="L"></app-toolbar-r-button>
            <app-toolbar-r-button label="R"></app-toolbar-r-button>
          </div>
        </div>
        <textarea rows="10" placeholder="Your description..."></textarea>
      </div>

      <div class="actions">
        <app-standard-button label="< Back"></app-standard-button>
        <app-colored-button label="Next Step >" colorClass="next-button"></app-colored-button>
      </div>
    </div>
    </body>
  `,
  styleUrls: ['./background.css', './task-form.css', './toolbar.css', './cycle-button.css'],
  standalone: true,
  imports: [MatIconModule, CircleButtonComponent, StandardButtonComponent, ColoredButtonComponent, CircleButtonComponent2, ToolbarLButtonComponent, ToolbarRButtonComponent]
})
export class AppComponent {
  taskStarted = false;

  toggleTask() {
    this.taskStarted = !this.taskStarted;
  }

  toggleDescription() {
    console.log('Description button clicked');
  }
}
