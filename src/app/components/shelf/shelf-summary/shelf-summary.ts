import { Component ,OnInit,signal} from '@angular/core';
import { ShelfService } from '../../../services/shelf-service';
import { ActivatedRoute, Router } from '@angular/router';
import { IShelfSummary } from '../../../models/shelf-model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shelf-summary',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './shelf-summary.html',
  styleUrl: './shelf-summary.css',
})
export class ShelfSummary implements OnInit{
  shelf = signal<IShelfSummary | null> (null);
  shelfId! : string;

  constructor(
    private shelfService : ShelfService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  ngOnInit() : void {
    this.shelfId = this.route.snapshot.paramMap.get('shelfId')!;
    this.getShelf();
  }

  getShelf() : void{
    this.shelfService.getShelfSummary(this.shelfId).subscribe({
      next : (data) =>{
        this.shelf.set(data);
      },
      error : (err)=>{
        console.log("Error loading by id",err);
      }
    });
  }

  updateShelf() : void{
    this.router.navigate(['/shelves/edit/',this.shelfId]);
  }

  deleteShelf(){
    if(confirm ('Are you sure you want to delete this shelf')){
      this.shelfService.deleteShelf(this.shelfId).subscribe({
        next : ()=>{
          this.router.navigate(['/shelves']);
        },
        error : (err : any) =>{
          console.log("Error in deleting the shelf",err);
        }
      })
    }
  }
}
