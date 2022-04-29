import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor() { }
  getPeople():Observable <any>{
    let peopleArray = [
    {
      firstName: 'Rafael',
      lastName: 'Souza',
      age: '24'
    },
    {
      firstName: 'Viviam',
      lastName: 'Monteiro',
      age: '24'
    },
    {
      firstName: 'Valeria',
      lastName: 'oliveira',
      age: '60'
    }];

    return of (peopleArray);
  }
}
