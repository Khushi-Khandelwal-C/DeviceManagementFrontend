import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DeviceService } from '../../../services/device-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attach-shelf',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './attach-shelf.html',
  styleUrl: './attach-shelf.css',
})
export class AttachShelf implements OnInit {
  deviceId!: string;
  shelfPositionId!: string;
  selectedShelfId!: string;
  
  shelfPosition = signal<any>(null);
  availableShelves = signal<any[]>([]);
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private deviceService : DeviceService
  ){}
ngOnInit(): void {
  this.deviceId = this.route.snapshot.paramMap.get("deviceId")!;
  this.shelfPositionId = this.route.snapshot.paramMap.get("shelfPositionId")!;

  this.loadShelfPositions();
  this.loadAvailableShelves();

}
loadAvailableShelves(){
  this.deviceService.getAvailableShelves().subscribe({
    next : (data) =>{
      
      this.availableShelves.set(data);

    }
  })
}

attachShelf(){
  if(!this.selectedShelfId) return;

  this.deviceService.addShelfToSP(this.deviceId,this.shelfPositionId,this.selectedShelfId)
  .subscribe(()=>{
    this.router.navigate(['/devices',this.deviceId,'shelf-positions']);
  })
}

loadShelfPositions(){
  this.deviceService.getShelfPositionById(this.shelfPositionId)
  .subscribe({
    next : (data) =>{
      this.shelfPosition.set(data);
    },
    error : (err) =>{
      console.log("Error loading shelf positions",err);
    }
  });
}


cancel(){
  this.router.navigate(['/devices',this.deviceId,'shelf-positions']);
}
}
