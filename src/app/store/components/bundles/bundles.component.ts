import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundle-card',
  templateUrl: './bundle-card.component.html',
  styleUrls: ['./bundle-card.component.css']
})
export class BundleCardComponent implements OnInit {
  @Input() bundle: any;

  constructor() { }

  ngOnInit(): void {
  }

  get youSave(): number {
    let totalProductPrice = 0;
    this.bundle.products.forEach((product: any) => {
      totalProductPrice += product.price;
    });
    return totalProductPrice - this.bundle.price;
  }
}
