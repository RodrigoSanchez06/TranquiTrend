import { Injectable } from '@angular/core';
import { Category } from '../_model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories(): Category[] {
    let categories: Category[] = [
      new Category(1, 'Juguetes Antiestres', 'ESTR', 1),
      new Category(2, 'Aromatizantes', 'CLOTH', 1),
      new Category(3, 'Productos Naturales', 'FOOT', 1),
    ];
    return categories;
  }
}
