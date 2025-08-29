// input: "hello"
// output: Map { h => 1, e => 1, l => 2, o => 1 }
function countChars(txt) {
    var _a;
    var map = new Map();
    for (var _i = 0, txt_1 = txt; _i < txt_1.length; _i++) {
        var char = txt_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    return map;
}
// input: [1, 2, 2, 3, 1]
// output: Map { 1 => 2, 2 => 2, 3 => 1 }
function countNums(arr) {
    var _a;
    var map = new Map();
    for (var i = 0; i < arr.length; ++i) {
        map.set(arr[i], ((_a = map.get(arr[i])) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    return map;
}
// input: "swiss"
// output: "w" (since it's the first char that occurs once)
function uniqueChar(str) {
    var _a;
    var map = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, str_2 = str; _b < str_2.length; _b++) {
        var char = str_2[_b];
        if (map.get(char) === 1) {
            return char;
        }
    }
    return "";
}
var x = uniqueChar("swiss");
console.log(x);
