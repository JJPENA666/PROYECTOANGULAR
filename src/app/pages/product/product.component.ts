import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }

  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"Licras",
      price:10,
      description:"ropa / Jonathan Peña",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"pantalones",
      price:35,
      description:"ropa / Jonathan Peña",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/204";
    this.httpClient.put(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/211";
    this.httpClient.delete(url).subscribe
    (response => {console.log(response);});
  }
}