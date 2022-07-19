import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService, Todo } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(private restService: RestService) {
    this.todos$ = this.restService.getTodos();
  }
}
