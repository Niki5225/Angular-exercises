import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { GameItemComponent } from './game/game-item/game-item.component';

@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		GameItemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule, 
		FormsModule
	],
	providers: [
		provideClientHydration()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
