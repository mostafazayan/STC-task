import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: ProductService,
    private _dialogRef: MatDialogRef<ProductAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.productForm = this._fb.group({
      title: '',
      price: '',
      category: '',
      image: '',
      rating: this._fb.group({
        count: '',
        rate: ''
      })
    });
  }

  ngOnInit(): void {
    this.productForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      if (this.data) {
        this._empService
          .updateProduct(this.data.id, this.productForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addProduct(this.productForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
