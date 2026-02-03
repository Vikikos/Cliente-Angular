import { Injectable } from '@angular/core';
import { IEvents } from '../interfaces/i-events';//la interfaz
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class EventoServiceService {
  private eventsEndpoint = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents() : Observable<IEvents[]> {
    //rapida
    //return this.http.get<IEvents[]>(this.eventsEndpoint);

    //manera correcta
    return this.http
    .get<IEvents[]>(this.eventsEndpoint)
    .pipe(
      catchError((res: HttpErrorResponse) => 
        throwError(
          () => new Error('Error en Obtener Eventos'),
        ),
      ),
    );
  }

  addEvent(evento: IEvents): Observable<IEvents> {
    return this.http
    .post<IEvents>(this.eventsEndpoint, evento)
    .pipe(
      catchError((res: HttpErrorResponse) =>
        throwError(()=> new Error('Error al crear el evento'))
      )
    );
  }

  deleteEvento(id: string):Observable<any> {
    return this.http
    .delete<IEvents>(`${this.eventsEndpoint}/${id}`)
    .pipe(
      catchError((res: HttpErrorResponse) => 
        throwError(()=> new Error('Error al eliminar el vento'))
      )
    );
  }
}
