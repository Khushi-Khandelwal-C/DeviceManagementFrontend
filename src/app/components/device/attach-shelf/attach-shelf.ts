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
  

  availableShelves = signal<any[]>([]);
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private deviceService : DeviceService
  ){}
ngOnInit(): void {
  this.deviceId = this.route.snapshot.paramMap.get("deviceId")!;
  this.shelfPositionId = this.route.snapshot.paramMap.get("shelfPositionId")!;

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

removeShelf(shelfPositionId : string){
  if(!confirm("Are you sure you want to remove this shelf?")) return;

  this.deviceService.removeShelfFromSP(this.deviceId,shelfPositionId)
  .subscribe({
    next : () =>{
      alert('Shelf removed succesfully');
      this.loadAvailableShelves();
      
    },
    error : (err) => console.error(err)
  })
}
cancel(){
  this.router.navigate(['/devices',this.deviceId,'shelf-positions']);
}
}
