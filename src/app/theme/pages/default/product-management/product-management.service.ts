import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL } from '../../../../app-service';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  /**for set header */
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('token', JSON.parse(localStorage.getItem('token')))
    return headers;
  }

  /**for set header */
  getHeaderWithoutToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }


  deleteProduct(ProductId) {
    return this.http.delete(URL + 'product/deleteProduct/' + ProductId, { headers: this.getHeaderWithToken() })
  }

  /**
   * returns the detail of particular details
   * @param ProductId 
   */
  getProductDetails(ProductId) {
    return this.http.get(URL + 'product/fetchProduct/' + ProductId, { headers: this.getHeaderWithToken() })
  }


  /**
   * creates new email teplate
   * @param ProductObj detail object of Product
   */
  createProduct(ProductObj) {
    return this.http.post(URL + 'product/addProduct', ProductObj, { headers: this.getHeaderWithToken() })
  }


  /**
   * update particular email teplate's details
   * @param ProductObj detail object of the Product
   * @param ProductId unique id of the Product
   */
  updateProduct(ProductObj, ProductId) {
    return this.http.put(URL + 'product/editProduct/' + ProductId, ProductObj, { headers: this.getHeaderWithToken() })
  }

} 
