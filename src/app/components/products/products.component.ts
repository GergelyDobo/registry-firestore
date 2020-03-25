import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductWithID } from '../../models/product';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
	@Input() public products: ProductWithID[];
	@Output() public updateProduct = new EventEmitter<ProductWithID>();
	@Output() public deleteProduct = new EventEmitter<ProductWithID>();
}
