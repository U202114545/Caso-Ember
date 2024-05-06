import { Component, OnInit } from '@angular/core';
import { BundleService} from "../../services/bundles-service.service";
import { Bundle} from "../../model/bundles";


@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {
  bundles: any[] = [];
  products: any[] = [];

  constructor(private bundleService: BundleService) { }

  ngOnInit(): void {
    this.bundleService.getBundles().subscribe(bundles => {
      this.bundles = bundles;
      this.bundleService.getProducts().subscribe(products => {
        this.products = products;
        this.calculateSavings();
      });
    });
  }

  calculateSavings(): void {
    this.bundles.forEach(bundle => {
      const bundleProducts = this.products.filter(product => product.bundleId === bundle.id);
      const totalProductPrice = bundleProducts.reduce((total, product) => total + product.price, 0);
      bundle.savings = totalProductPrice - bundle.price;
    });
  }

  protected readonly Bundle = Bundle;
}
