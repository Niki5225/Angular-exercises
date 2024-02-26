import { Component, Input, OnInit} from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private symbols: number = 250;
	@Input() article!: Article;
	@Input() articleDesc!: string;
	descToShow: string = "";
	articleDescLen: number = 0;
	showReadMoreBtn: boolean = true;
	showHideBtn: boolean = false;
	imageIsShown: boolean = false;
	imageButtonTitle: string = "Show Image";
	
	ngOnInit(): void {
		this.articleDescLen = 0;
		this.descToShow = "";
	}

	readMore():void  {
		this.articleDescLen = this.symbols;
		if (this.articleDesc.length >= this.articleDescLen) {
			this.showHideBtn = true;
			this.showReadMoreBtn = false;
		} else {
			this.descToShow = this.descToShow.substring(0, this.articleDescLen);
		}
	}

	toggleImage(): void {
		this.imageButtonTitle = "Hide Image";
		this.imageIsShown = !this.imageIsShown;
	}

	hideDesc(): void {
		this.articleDescLen = 0;
		this.showReadMoreBtn = true;
		this.showHideBtn = false;
		this.descToShow = "";
	}


}
