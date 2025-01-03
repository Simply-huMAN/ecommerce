export class ProductFilter {
  category: string;
  minPrice: number;
  maxPrice: number;
  rating: number;

  constructor(category?: string, minPrice?: number, maxPrice?: number, rating?: number){
    this.category = category || '';
    this.minPrice = minPrice || 0;
    this.maxPrice = maxPrice || 0;
    this.rating = rating || 0;
  }
}