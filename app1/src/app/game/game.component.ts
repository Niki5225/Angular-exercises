import { Component } from '@angular/core';
import { Game } from './game-item/game-item.component';


@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrl: './game.component.css'
})
export class GameComponent {
	shouldColorChange: boolean = false;

	searchText: string = '';

	games: Game[] = [
		{title: "Minecraft", price: 50, img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"},
		{title: "Minecraft", price: 60, img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"},
		{title: "Minecraft", price: 70, img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"},
	];

	
	handleExpandContent = (): void => {
		this.shouldColorChange = this.shouldColorChange ? false : true;
	}
}