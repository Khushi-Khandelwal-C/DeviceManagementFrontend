import { Component, OnInit, signal } from '@angular/core';
import { DeviceService } from '../../../services/device-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-shelf-positions',
  imports: [CommonModule,RouterModule],
  templateUrl: './device-shelf-positions.html',
  styleUrl: './device-shelf-positions.css',
})
export class DeviceShelfPositions implements OnInit {
  deviceId !: string;
  shelfPositions = signal<any[]>([]);
  constructor(
    private deviceService : DeviceService,
    private route : ActivatedRoute,
    private router : Router
  ){}
  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('deviceId')!;
    this.loadShelfPositions();
  }

  loadShelfPositions(){
    this.deviceService.getShelfPositions(this.deviceId).subscribe({
      next : (data : any) => {
        this.shelfPositions.set(data);
      },
      error : (err) =>{
        console.log("Error loading shelf positions",err)
      }
    });
  }

  attachShelf(shelfPositionId : string){
    this.router.navigate([
      '/devices',this.deviceId,
      'shelf-positions', shelfPositionId,
      'attach'
    ]);
  }

}
