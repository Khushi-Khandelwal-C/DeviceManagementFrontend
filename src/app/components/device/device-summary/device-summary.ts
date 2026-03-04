import { Component, OnInit, signal } from '@angular/core';
import { DeviceService } from '../../../services/device-service';
import { IDeviceCreation, IDeviceResponse } from '../../../models/model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-device-summary',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './device-summary.html',
  styleUrl: './device-summary.css',
})
export class DeviceSummary implements OnInit{

  device = signal<IDeviceCreation | null>(null);
  deviceId! : string;

  constructor(
    private deviceService : DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('deviceId')!;
    this.getDevice();
  }

   getDevice(): void {
    this.deviceService.getDevice(this.deviceId).subscribe({
      next: (data) => {
        this.device.set(data);
      },
      error: (err) => {
        console.log("Error loading device by id", err);
      }
    })
  }

  updateDevice(): void {
    this.router.navigate(['/devices/edit', this.deviceId]);
  }

  deleteDevice()  {
    if (confirm('Are you sure you want to delete this device?')) {
      this.deviceService.deleteDevice(this.deviceId).subscribe({
        next: () => {
          this.router.navigate(['/devices']);
          console.log("Device Deleted");
        },
        error: (err : any) => {
          console.log("Error in deleting the device", err);
        }
      })
    }
  }


}
