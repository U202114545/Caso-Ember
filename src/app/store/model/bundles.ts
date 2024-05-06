// product.model.ts
export class Product {
  constructor(id: number, title: string, description: string, photoUrl: string, price: number, bundleId: number, rating: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.photoUrl = photoUrl;
    this.price = price;
    this.bundleId = bundleId;
    this.rating = rating;
  }
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  bundleId: number;
  rating: number;
}

// bundle.model.ts
export class Bundle {
  constructor(id: number, title: string, description: string, photoUrl: string, price: number, rating: number, savings: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.photoUrl = photoUrl;
    this.price = price;
    this.rating = rating;
    this.savings = savings;
  }
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  rating: number;
  savings?: number;
}
