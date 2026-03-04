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


}
