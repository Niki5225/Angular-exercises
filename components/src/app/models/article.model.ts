interface ArticleInterface {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
}

export class Article implements ArticleInterface {
    constructor(
        public title: string,
        public author: string,
        public description: string,
        public imageUrl: string
    ) { }

}
