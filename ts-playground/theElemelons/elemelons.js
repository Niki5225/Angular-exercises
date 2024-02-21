var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.getElementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Melon.prototype.toString = function () {
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Watermelon.prototype.toString = function () {
        return "Element: Water Sort: ".concat(this.melonSort, " Element Index: ").concat(this.getElementIndex());
    };
    return Watermelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Earthmelon.prototype.toString = function () {
        return "Element: Earth Sort: ".concat(this.melonSort, " Element Index: ").concat(this.getElementIndex());
    };
    return Earthmelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Firemelon.prototype.toString = function () {
        return "Element: Fire Sort: ".concat(this.melonSort, " Element Index: ").concat(this.getElementIndex());
    };
    return Firemelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Airmelon.prototype.toString = function () {
        return "Element: Air Sort: ".concat(this.melonSort, " Element Index: ").concat(this.getElementIndex());
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Water', 'Fire', 'Earth', 'Air'];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currentElement = this.element.shift();
        this.element.push(currentElement);
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.element[0], " Sort: ").concat(this.melonSort, " Element Index: ").concat(this.getElementIndex());
    };
    return Melolemonmelon;
}(Firemelon));
// let test : Melon = new Melon(100, "Test");
//Throws error
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
