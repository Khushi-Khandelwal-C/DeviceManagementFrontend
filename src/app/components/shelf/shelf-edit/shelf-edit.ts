import { Component, OnInit, signal } from '@angular/core';
import { ShelfService } from '../../../services/shelf-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-shelf-edit',
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './shelf-edit.html',
  styleUrl: './shelf-edit.css',

})

export class ShelfEdit implements OnInit {

  shelfId!: string;
  shelf = signal<any | null>(null);
  shelfForm!: FormGroup;

  constructor(
    private shelfService: ShelfService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.shelfId = this.route.snapshot.paramMap.get("shelfId")!;
    this.initForm();
    this.loadShelf(); 
  }

  initForm() {
    this.shelfForm = this.formBuilder.group({
      shelfName: ['', Validators.required],
      partNumber: ['', Validators.required],
      shelfId: [{ value: '', disabled: true }]
    });
  }

  loadShelf() {
    this.shelfService.getShelfSummary(this.shelfId).subscribe({
      next: (data) => {
        this.shelf.set(data);
        this.shelfForm.patchValue(data);
      }
    });
  }
  onSubmit() {
    if (this.shelfForm.invalid) return;
    const updatedData = this.shelfForm.getRawValue();
    this.shelfService.updateShelf(this.shelfId, updatedData)
       .subscribe(()=>{
      this.router.navigate(['/shelves',this.shelfId]);
     });
  }
  cancel() {
    this.router.navigate(['/shelves', this.shelfId]);
  }
}