import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      add-task works!
    </p>
  `,
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

}
