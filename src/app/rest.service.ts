import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
