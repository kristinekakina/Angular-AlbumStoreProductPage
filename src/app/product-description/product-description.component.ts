import { Component, OnInit } from '@angular/core';
import {productService } from '../product.service';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;
  productService: any;
  constructor(private_ProductService: productService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe(response=> this.albumInfo= response);
  }

}
