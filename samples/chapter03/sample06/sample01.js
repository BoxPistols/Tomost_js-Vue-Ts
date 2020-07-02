"use strict";
var Book = /** @class */ (function () {
    function Book() {
        this._name = '';
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value === '') {
                console.log('書籍名が指定されていません');
            }
            else {
                this._name = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
var mybook = new Book();
mybook.name = 'JavaScript入門';
console.log(mybook.name);
