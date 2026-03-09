import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetShelves, IShelfSummary } from '../models/shelf-model';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  private baseUrl = "http://localhost:8080/api/shelf/"

  constructor(private http : HttpClient){}

  getAllShelves() : Observable<IGetShelves[]>{
    return this.http.get<IGetShelves[]>(this.baseUrl);
  }

  deleteShelf(shelfId : string) : Observable<any>{
    return this.http.delete(`${this.baseUrl}${shelfId}`,{ 
    responseType: 'text' 
  });
  }

  getShelfSummary(shelfId : string) : Observable<IShelfSummary>{
    return this.http.get<IShelfSummary>(`${this.baseUrl}${shelfId}`);
  }
  
  updateShelf(shelfId : string,data : any) {
    return this.http.put(`${this.baseUrl}${shelfId}`,data)
  }

  createShelf(data : any){
    return this.http.post(`${this.baseUrl}add`,data,{responseType: 'text'});
  }
}
