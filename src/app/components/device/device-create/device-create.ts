import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeviceService } from '../../../services/device-service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-create',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './device-create.html',
  styleUrl: './device-create.css',
})
export class DeviceCreate {
  deviceForm : FormGroup;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private deviceService : DeviceService
  ){
    this.deviceForm = this.formBuilder.group({
      deviceName : ['',Validators.required],
      partNumber : ['',Validators.required],
      buildingName : ['',Validators.required],
      deviceType : ['',Validators.required],
      numOfSP : [1,[Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(){
    if(this.deviceForm.invalid) return;

    this.deviceService.createDevice(this.deviceForm.value)
    .subscribe(()=>{
      this.router.navigate(['/devices']);
    });
  }

  cancel(){
    this.router.navigate(['/devices'])
  }
}
