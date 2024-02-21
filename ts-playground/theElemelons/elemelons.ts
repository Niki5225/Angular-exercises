interface MelonSkeleton {
    weight: Number,
    melonSort: String
}


abstract class Melon implements Melon {
    public weight;
    public melonSort;
    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public getElementIndex(): number {
        return this.weight * this.melonSort.length;

    }

    public toString(): void {

    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public toString(): string {
        return `Element: Water Sort: ${this.melonSort} Element Index: ${this.getElementIndex()}` 
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public toString(): string {
        return `Element: Earth Sort: ${this.melonSort} Element Index: ${this.getElementIndex()}` 
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public toString(): string {
        return `Element: Fire Sort: ${this.melonSort} Element Index: ${this.getElementIndex()}` 
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public toString(): string {
        return `Element: Air Sort: ${this.melonSort} Element Index: ${this.getElementIndex()}` 
    }
}

class Melolemonmelon extends Firemelon {
    public element;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = ['Water', 'Fire', 'Earth', 'Air'];
    }

    public morph(): void {
        let currentElement = this.element.shift();
        this.element.push(currentElement);
    }

    public toString(): string {
        return `Element: ${this.element[0]} Sort: ${this.melonSort} Element Index: ${this.getElementIndex()}`
    }
} 

// let test : Melon = new Melon(100, "Test");

//Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");

console.log(watermelon.toString());

// Element: Water

// Sort: Kingsize

// Element Index: 100