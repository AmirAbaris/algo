// linear search
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            // returns index if
            return i;
        }
    }
    // not found
    return -1;
}
function binarySearch(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = (low + high) / 2;
        if (arr[mid] === target) {
            return target;
        }
        if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    // not found
    return -1;
}
function fibo(num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return fibo(num - 1) + fibo(num - 2);
}
console.log(fibo(5));
