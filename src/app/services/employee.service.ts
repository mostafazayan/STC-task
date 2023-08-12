import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let basUrl: string = 'https://fakestoreapi.com/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {


  constructor(private _http: HttpClient) { }

  addProduct(data: any): Observable<any> {
    return this._http.post(basUrl, data);
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this._http.put(`${basUrl}/${id}`, data);
  }

  getProductList(): Observable<any> {
    return this._http.get(basUrl);
  }
  getCategoryList(): Observable<any> {
    return this._http.get(`${basUrl}/categories`);
  }
  getCategoryProducts(category: string): Observable<any> {
    return this._http.get(`${basUrl}/category/${category}`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${basUrl}/${id}`);
  }
}
