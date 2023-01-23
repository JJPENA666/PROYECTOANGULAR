import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpServicesService } from 'src/app/services/product-http-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  HttpClient: any;
  constructor(private productHttpService: ProductHttpServicesService) {

  }

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.productHttpService.getOne(1).subscribe
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

  updateProduct(){
    const data = {
      title:"Pantalones",
      price:35,
      description:"ropa / Jonathan Peña",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/204";
    this.productHttpService.update(20, data).subscribe(
      response => {console.log(response);
    });
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/211";
    this.productHttpService.destroy(1).subscribe
    (response => {console.log(response);});
  }
}
