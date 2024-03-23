import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  baseURL:string = "https://api.chucknorris.io/jokes";
  constructor(private http:HttpClient) { }
  getRandomJoke(){
    return this.http.get(this.baseURL+"/random");
  }
  getCategory(){
    return this.http.get(this.baseURL+"/categories");
  }
  getJokeInCategory(category:string){
    return this.http.get(this.baseURL+"/random?"+category);
  }
}
