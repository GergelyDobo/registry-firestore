export interface Product {
	name: string;
	price: number;
	manufacturer: string;
	currency: string;
	amount: number;
}

export interface ProductWithID extends Product {
	id: string;
}
