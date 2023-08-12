import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
const images = './assets/';

const image = (path: any) => images + path;
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  isLoading = false;

  products: any = [];
  categories: any = [];

  constructor(
    public dialog: MatDialog,
    private data: ProductService,
  ) {

  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.isLoading = true;
    this.data.getProductList().subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
      console.log(this.products);
    });
  }
  getProductsByCategory(category: string) {
    this.isLoading = true;
    this.data.getCategoryProducts(category).subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
      console.log(this.products);
    });
  }

  getCategories() {
    this.data.getCategoryList().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories);
    });
  }

}
