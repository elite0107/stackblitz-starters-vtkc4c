import {
  HttpClient,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NewWidget, Widget } from '../types/widget';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  WIDGETS_URI =
    'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

  // delete widget URI is DELETE https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets/<ID>

  constructor(private http: HttpClient) {}

  listWidgets() {
    return this.http.get<{ [key: string]: Widget }>(this.WIDGETS_URI);
  }

  deleteWidget(id: string) {
    return this.http.delete(
      `https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets/${id}`
    );
  }

  addWidget(data: NewWidget) {
    return this.http.post<NewWidget>(
      `https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets/`,
      data
    );
  }
}
