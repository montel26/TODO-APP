import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AddTaskComponent]
})
export class AppComponent {
  title = 'todo';
}


