import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';  

import { INote } from '../models';

const NOTES_API: string = "../../../assets/data/notes.json";

@Injectable({
  providedIn: "root"
})
export class NotesService {
  notes: INote[];

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  fetch(): Observable<INote[]> {
    return this.httpClient.get<INote[]>(NOTES_API).pipe(
      delay(3000));
  }
}
