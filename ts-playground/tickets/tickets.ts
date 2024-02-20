function sortArray(arr: Array<string>, sortCriteria: string) {

    interface Destination {
        destination: string,
        price: number,
        status: string,
    }


    let newArr: Array<Destination> = [];

    for (const iteratorStr of arr) {
        let [destination, price, status] = iteratorStr.split("|");

        let priceNum = Number(price);

        newArr.push({
            destination,
            price: priceNum,
            status,
        }
        );
    }

    if (sortCriteria === "price") {
        newArr.sort((a, b) => a['price'] - b['price']);
    } else {
        newArr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }


    return newArr;
}

console.log(sortArray([

    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'

],

    'destination'));