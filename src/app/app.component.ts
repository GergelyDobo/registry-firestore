import { Component } from '@angular/core';
import { ProductService } from './services/product/product.service';
import { take } from 'rxjs/operators';
import { ProductWithID } from './models/product';
import { isNil } from 'lodash';
import { MatDialog } from '@angular/material';
import { FormComponent } from './components/form/form.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private readonly dialog: MatDialog, public readonly productService: ProductService) {}

	public updateProduct(product: ProductWithID): void {
		this.dialog
			.open(FormComponent, { data: product })
			.afterClosed()
			.pipe(take(1))
			.subscribe((updatedProduct) => {
				if (!isNil(updatedProduct) && !isNil(updatedProduct.data)) {
					this.productService.updateProduct(updatedProduct.data);
				}
			});
	}

	public createProduct(): void {
		this.dialog
			.open(NewProductComponent)
			.afterClosed()
			.pipe(take(1))
			.subscribe((product) => {
				if (!isNil(product) && !isNil(product.data)) {
					this.productService.createProduct(product.data);
				}
			});
	}

	public deleteProduct(product: ProductWithID): void {
		this.productService.deleteProduct(product);
	}
}
