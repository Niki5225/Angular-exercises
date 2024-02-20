function sortArray(arr, sortCriteria) {
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var iteratorStr = arr_1[_i];
        var _a = iteratorStr.split("|"), destination = _a[0], price = _a[1], status_1 = _a[2];
        var priceNum = Number(price);
        newArr.push({
            destination: destination,
            price: priceNum,
            status: status_1,
        });
    }
    if (sortCriteria === "price") {
        newArr.sort(function (a, b) { return a['price'] - b['price']; });
    }
    else {
        newArr.sort(function (a, b) { return a[sortCriteria].localeCompare(b[sortCriteria]); });
    }
    return newArr;
}
console.log(sortArray([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
