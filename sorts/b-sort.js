function bSort(n) {
    var _a;
    for (var i = 0; i < n.length - 1; ++i) {
        for (var j = 0; j < n.length - i - 1; ++j) {
            if (n[j] > n[j + 1]) {
                _a = [n[j + 1], n[j]], n[j] = _a[0], n[j + 1] = _a[1];
            }
        }
    }
}
var r = [5, 4, 3, 2, 1];
bSort(r);
console.log(r);
