import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ProductWithID } from 'src/app/models/product';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {
	public isSubmitted: boolean = false;

	constructor(private readonly dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: ProductWithID) {}

	public submit(): void {
		this.isSubmitted = true;
	}

	public updateProduct(form: NgForm): void {
		if (form.value.name && form.value.price && form.value.manufacturer && form.value.currency && form.value.amount) {
			const product = {
				id: this.data.id,
				name: form.value.name,
				price: form.value.price,
				manufacturer: form.value.manufacturer,
				currency: form.value.currency,
				amount: form.value.amount
			} as ProductWithID;

			this.dialogRef.close({ data: product });
		}
	}
}
