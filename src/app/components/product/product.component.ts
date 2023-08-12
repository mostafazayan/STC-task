import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
const images = './assets/';

const image = (path: any) => images + path;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Input() products: any;

  count = 0;
  toggle = true;
  status = 'Enable';
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {

  }

  openDetails(id: number): void {
    let productData: any;
    const productsData = this.products;
    console.log(this.products);

    productsData.forEach((product: any) => {
      console.log(product);

      if (product.id === id) {
        productData = product;
      }
    });
    this.dialog.open(ProductDetailsComponent, {
      data: { products: productData },
    });
  }



}
