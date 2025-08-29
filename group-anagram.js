function groupAnagrams(strs) {
    var map = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var word = strs_1[_i];
        var sorted = word.split("").sort().join("");
        map.set(sorted, [word]);
        if (!map.has(sorted)) {
            map.set(sorted, [word]);
        }
        else {
            map.get(sorted).push(word);
        }
    }
    return Array.from(map.values());
}
groupAnagrams(["cat", "tac", "bat"]);
