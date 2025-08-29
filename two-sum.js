function twoSum(nums, target) {
    let map = {};
    let complement;
    for (let i = 0; i < nums.length; i++) {
        console.log('b map', map);
        if (nums[i] in map) {
            console.log('map', map);
            return Object.values(map);
        }
        complement = target - nums[i];
        map[complement] = i;
    }
    return [];
}
let result = twoSum([2, 7, 11], 9);
console.log(result);
