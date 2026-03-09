import { Component,OnInit,signal } from '@angular/core';
import { IGetShelves } from '../../../models/shelf-model';
import { ShelfService } from '../../../services/shelf-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shelf-list',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  standalone : true,
  templateUrl: './shelf-list.html',
  styleUrl: './shelf-list.css',
})
export class ShelfList implements OnInit{
  shelves = signal<IGetShelves[]>([]);
  constructor(
    private shelfService : ShelfService
  ){}

  ngOnInit() : void{
    this.loadShelves();
  }

  loadShelves(){
    this.shelfService.getAllShelves().subscribe({
      next : (data) =>{
        this.shelves.set(data);
      },
      error : (err)=>{
        console.log("Error in getting all shelves",err)
      }
    })
  }


}
