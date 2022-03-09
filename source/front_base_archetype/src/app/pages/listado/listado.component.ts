import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';
import { MenuDataService } from '../../core/services/menu-data.service';
import { LayoutService } from '../../core/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { OpcMenu } from '../models/service/response/opc-menu.model';
import { OpcMenuService } from '../services/opc-menu.service';
import { ServiceResponse } from '../../core/models/services/response/service-response.model';
import { ConfirmationService, MenuItem, SelectItem } from 'primeng/api';
import { Product } from '../models/service/response/product.model';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'description': 'Product Description',
        'image': 'bamboo-watch.jpg',
        'price': 65,
        'category': 'Accessories',
        'quantity': 24,
        'inventoryStatus': 'INSTOCK',
        'rating': 5
      },
      {
        'id': '1001',
        'code': 'nvklal433',
        'name': 'Black Watch',
        'description': 'Product Description',
        'image': 'black-watch.jpg',
        'price': 72,
        'category': 'Accessories',
        'quantity': 61,
        'inventoryStatus': 'INSTOCK',
        'rating': 4
      },
      {
        'id': '1002',
        'code': 'zz21cz3c1',
        'name': 'Blue Band',
        'description': 'Product Description',
        'image': 'blue-band.jpg',
        'price': 79,
        'category': 'Fitness',
        'quantity': 2,
        'inventoryStatus': 'LOWSTOCK',
        'rating': 3
      },{
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'description': 'Product Description',
        'image': 'bamboo-watch.jpg',
        'price': 65,
        'category': 'Accessories',
        'quantity': 24,
        'inventoryStatus': 'INSTOCK',
        'rating': 5
      },
      {
        'id': '1001',
        'code': 'nvklal433',
        'name': 'Black Watch',
        'description': 'Product Description',
        'image': 'black-watch.jpg',
        'price': 72,
        'category': 'Accessories',
        'quantity': 61,
        'inventoryStatus': 'INSTOCK',
        'rating': 4
      },
      {
        'id': '1002',
        'code': 'zz21cz3c1',
        'name': 'Blue Band',
        'description': 'Product Description',
        'image': 'blue-band.jpg',
        'price': 79,
        'category': 'Fitness',
        'quantity': 2,
        'inventoryStatus': 'LOWSTOCK',
        'rating': 3
      },{
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'description': 'Product Description',
        'image': 'bamboo-watch.jpg',
        'price': 65,
        'category': 'Accessories',
        'quantity': 24,
        'inventoryStatus': 'INSTOCK',
        'rating': 5
      },
      {
        'id': '1001',
        'code': 'nvklal433',
        'name': 'Black Watch',
        'description': 'Product Description',
        'image': 'black-watch.jpg',
        'price': 72,
        'category': 'Accessories',
        'quantity': 61,
        'inventoryStatus': 'INSTOCK',
        'rating': 4
      },
      {
        'id': '1002',
        'code': 'zz21cz3c1',
        'name': 'Blue Band',
        'description': 'Product Description',
        'image': 'blue-band.jpg',
        'price': 79,
        'category': 'Fitness',
        'quantity': 2,
        'inventoryStatus': 'LOWSTOCK',
        'rating': 3
      },{
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'description': 'Product Description',
        'image': 'bamboo-watch.jpg',
        'price': 65,
        'category': 'Accessories',
        'quantity': 24,
        'inventoryStatus': 'INSTOCK',
        'rating': 5
      },
      {
        'id': '1001',
        'code': 'nvklal433',
        'name': 'Black Watch',
        'description': 'Product Description',
        'image': 'black-watch.jpg',
        'price': 72,
        'category': 'Accessories',
        'quantity': 61,
        'inventoryStatus': 'INSTOCK',
        'rating': 4
      },
      {
        'id': '1002',
        'code': 'zz21cz3c1',
        'name': 'Blue Band',
        'description': 'Product Description',
        'image': 'blue-band.jpg',
        'price': 79,
        'category': 'Fitness',
        'quantity': 2,
        'inventoryStatus': 'LOWSTOCK',
        'rating': 3
      },{
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'description': 'Product Description',
        'image': 'bamboo-watch.jpg',
        'price': 65,
        'category': 'Accessories',
        'quantity': 24,
        'inventoryStatus': 'INSTOCK',
        'rating': 5
      },
      {
        'id': '1001',
        'code': 'nvklal433',
        'name': 'Black Watch',
        'description': 'Product Description',
        'image': 'black-watch.jpg',
        'price': 72,
        'category': 'Accessories',
        'quantity': 61,
        'inventoryStatus': 'INSTOCK',
        'rating': 4
      },
      {
        'id': '1002',
        'code': 'zz21cz3c1',
        'name': 'Blue Band',
        'description': 'Product Description',
        'image': 'blue-band.jpg',
        'price': 79,
        'category': 'Fitness',
        'quantity': 2,
        'inventoryStatus': 'LOWSTOCK',
        'rating': 3
      }
    ];

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
