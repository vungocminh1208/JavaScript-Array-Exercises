/**
 * 	
10. 	Write 3 methods myMap, myFilter, myReduce (suggest: user Array.prototype, "this" keyword, and for loop).
    3 these methods have similar in use and usage as map, filter, reduce of array in JS
 */

Array.prototype.myMap = function (callback) {

    var arr = [];

    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }

    return arr;
};

Array.prototype.myFilter = function (callback) {

    var arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) == true) {
            arr.push(this[i]);
        }

    }

    return arr;
}

Array.prototype.myReduce = function (callback) {
    var a = 0;
    for (let i = 0; i < this.length; i++) {
        callback(a = a + this[i])
    }

    return a;
}

