import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Product, ProductWithID } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productCollection: AngularFirestoreCollection<Product>;
	private _products$: Observable<ProductWithID[]>;

	constructor(private readonly angularFirestore: AngularFirestore) {
		this.productCollection = this.angularFirestore.collection<Product>('product');
		this._products$ = this.productCollection.snapshotChanges().pipe(
			map((actions) =>
				actions.map((action) => {
					const data = action.payload.doc.data() as Product;
					const id = action.payload.doc.id;
					return { id, ...data } as ProductWithID;
				})
			)
		);
	}

	public get products$(): Observable<ProductWithID[]> {
		return this._products$;
	}

	public createProduct(product: Product): void {
		this.productCollection.add(product);
	}

	public deleteProduct(product: ProductWithID): void {
		this.angularFirestore.doc('product/' + product.id).delete();
	}

	public updateProduct(product: ProductWithID): void {
		this.angularFirestore.doc('product/' + product.id).update(product);
	}
}
