function secSort(n) {
    for (var i = 0; i < n.length; ++i) {
        for (var j = i + 1; j < n.length; ++j) {
            if (n[i] > n[j]) {
                var temp = n[i];
                n[i] = n[j];
                n[j] = temp;
            }
        }
    }
}
var r = [5, 4, 3, 2, 1];
secSort(r);
console.log(r);
