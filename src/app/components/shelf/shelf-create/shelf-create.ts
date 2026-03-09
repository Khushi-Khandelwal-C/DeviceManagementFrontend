import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ShelfService } from '../../../services/shelf-service';

@Component({
  selector: 'app-shelf-create',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './shelf-create.html',
  styleUrl: './shelf-create.css',
})
export class ShelfCreate {
  shelfForm! : FormGroup;
  constructor(
    private shelfService : ShelfService,
  private router : Router,
  private formBuilder : FormBuilder
  ){
    this.initForm();
  }

  initForm(){
    this.shelfForm = this.formBuilder.group({
      
      partNumber : ['',Validators.required],
      shelfName : ['',Validators.required],
    });
  }

  onSubmit(){
    if(this.shelfForm.invalid) return;

    
    this.shelfService.createShelf(this.shelfForm.value).subscribe({
      next:() =>{
        this.router.navigate(['/shelves'])
      },
      error : (err) =>{
        console.log("Error creating shelf",err);
      }
    });
  }
  cancel(){
    this.router.navigate(['/shelves']);
  }
}
