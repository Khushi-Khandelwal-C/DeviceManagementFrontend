import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeviceCreation, IDeviceResponse } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http : HttpClient){}

  private baseUrl = "http://localhost:8080/api/device/"

  getDevice(deviceId : string) : Observable<IDeviceCreation>{
    return this.http.get<IDeviceCreation>(`${this.baseUrl}${deviceId}`)
  }

  getAllDevices() : Observable<IDeviceResponse[]>{
    return this.http.get<IDeviceResponse[]>(this.baseUrl)
  }

  deleteDevice(deviceId : string) : any{
    return this.http.delete(`${this.baseUrl}${deviceId}`)
  }

  updateDevice(deviceId : string,data : any){
    return this.http.put(`${this.baseUrl}update/${deviceId}`,data)
  }

  createDevice(data : any){
    return this.http.post(`${this.baseUrl}add`,data)
  }

  getShelfPositions(deviceId : string){
    return this.http.get(`${this.baseUrl}${deviceId}/shelf-positions`)
  }

  addShelfToSP(deviceId : string,shelfPositionId : string,shelfId : string){
    return this.http.post(`${this.baseUrl}${deviceId}/shelf-positions/${shelfPositionId}/shelf/${shelfId}`,{}
    )
  }

  getAvailableShelves(){
    return this.http.get<any[]>('http://localhost:8080/api/shelf/available');
  }

  getShelfPositionById(shelfPositionId : string){
    return this.http.get<any>(`${this.baseUrl}shelf-positions/${shelfPositionId}`);
  }

  removeShelfFromSP(deviceId : string,shelfPositionId : string){
    return this.http.delete(`${this.baseUrl}${deviceId}/shelf-positions/${shelfPositionId}/shelf`);
  }



}
