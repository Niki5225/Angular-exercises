import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, input } from "@angular/core";

export interface Game {
	price: number,
	title: string,
	img: string
}


@Component ({
    selector:'game-item',
    templateUrl: './game-item.component.html'    ,

})
export class GameItemComponent implements OnInit, OnDestroy, OnChanges {
    @Input() game!: Game;
    
    ngOnInit(): void {
        console.log('Created!');
    }

    ngOnDestroy(): void {
        console.log('Deleted!');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Changed!');
    }
}