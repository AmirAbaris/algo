function isAnagram(s) {
    var _a;
    var map = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        console.log(char);
        map[char] = ((_a = map[char]) !== null && _a !== void 0 ? _a : 0) + 1;
    }
    console.log(map);
}
isAnagram("himei");
