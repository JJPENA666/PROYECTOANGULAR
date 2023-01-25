import { Component, OnInit } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { ProductHttpServicesService } from 'src/app/services/product-http-services.service';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel [] = [];
  selectedProduct: UpdateProductDto = {title:'', price:0, description:''};
  constructor(private productHttpService: ProductHttpServicesService) {

  }

  initProduct(){
    this.selectedProduct = {title:'', price:0, description:''}
  }

  ngOnInit(): void{
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe
    (response => {
      this.products = response;
      console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.productHttpService.getOne(3).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(): void{
    const data = {
      title:"Camisas",
      price:15,
      description:"ropa / Jonathan Peña",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);

    });
  }

  updateProduct(id:ProductModel['id']){
    const data = {
      title:"Pantalones",
      price:35,
      description:"ropa / Jonathan Peña",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/204";
    this.productHttpService.update(id, data).subscribe(
      response => {console.log(response);
    });
  }

  editProduct(product:ProductModel){
    this.selectedProduct = product;
  }


  deleteProduct(id:ProductModel['id']){
    this.productHttpService.destroy(id).subscribe(
      response => {
        this.products = this.products.filter(product => product.id != id);
        console.log(response);});
  }
}
