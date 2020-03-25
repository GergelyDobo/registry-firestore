import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
	declarations: [AppComponent, ProductsComponent],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule.enablePersistence(),
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
