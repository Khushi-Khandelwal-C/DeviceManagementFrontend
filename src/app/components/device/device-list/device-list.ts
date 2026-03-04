import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { IDeviceResponse } from '../../../models/model';
import { DeviceService } from '../../../services/device-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-device-list',
  imports: [CommonModule, RouterModule, FormsModule],
  standalone: true,
  templateUrl: './device-list.html',
  styleUrls: ['./device-list.css'],
})
export class DeviceList implements OnInit {
  devices = signal<IDeviceResponse[]>([]);
  deviceId!: string;
  constructor(
    private deviceService: DeviceService,
    //private cdr : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllDevices();

  }

  getAllDevices(): void {
    this.deviceService.getAllDevices().subscribe({
      next: (data) => {
        this.devices.set(data);
        //this.cdr.detectChanges();
      },
      error: (err) => {
        console.log("Error loading devices", err);
      }
    });
  }

  

}
