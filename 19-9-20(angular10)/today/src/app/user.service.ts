import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData()
  {
    return{
      name:'peter',
      age:35,
      id:100
    }
  }
}
