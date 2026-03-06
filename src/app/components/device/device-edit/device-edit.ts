import { Component, OnInit, signal } from '@angular/core';
import { DeviceService } from '../../../services/device-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-edit',
  imports: [FormsModule,RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './device-edit.html',
  styleUrl: './device-edit.css',
})
export class DeviceEdit implements OnInit{
  deviceId! : string;
  device = signal<any | null>(null);
  deviceForm!: FormGroup;

  constructor(
    private deviceService : DeviceService,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,
    private router : Router
  ){}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get("deviceId")!;
    this.initForm();
    this.loadDevice(); // order matters in this..it needs to be first initForm
  }

  initForm(){
    this.deviceForm = this.formBuilder.group({
      deviceName : ['',Validators.required],
      partNumber:['',Validators.required],
      buildingName : ['',Validators.required],
      deviceType : ['',Validators.required],
      numOfSP : [{value : '',disabled : true}]
    })
  }

  loadDevice(){
    this.deviceService.getDevice(this.deviceId).subscribe({
      next : (data) =>{
        this.device.set(data);
        this.deviceForm.patchValue(data);
      }
    })
  }

  onSubmit(){
    if(this.deviceForm.invalid) return;
     const updatedData = this.deviceForm.getRawValue();

     this.deviceService.updateDevice(this.deviceId,updatedData)
     .subscribe(()=>{
      this.router.navigate(['/devices',this.deviceId]);
     });
  }

  cancel(){
    this.router.navigate(['/devices',this.deviceId]);
  }
}
