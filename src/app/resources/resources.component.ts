import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-resources',
  imports: [JsonPipe],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

  id = signal(1);

  user = resource({
    request: () => ({ id: this.id() }),
    loader: ({ request }) => this.fetchUser(request.id)
  });

  userRx = rxResource({
    request: () => ({ id: this.id() }),
    loader: ({ request }) => this.getUser(request.id)
  });

  userHttp = httpResource<{}>(() => `/api/users/${this.id()}`);

  fetchUser(userId: number): Promise<{ data: any }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: {} });
      }, 500);
    });
  }

  getUser(userId: number) {
    return of({ data: {} }).pipe(delay(500));
  }

  changeId() {
    this.id.set(Math.floor(Math.random() * 10) + 1);
  }

}
