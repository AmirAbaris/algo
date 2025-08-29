function containsDuplicate(nums) {
    var numsSet = new Set(nums);
    console.log("arr", nums);
    console.log("set", numsSet);
    return numsSet.size === nums.length ? true : false;
}
containsDuplicate([1, 2, 1]);
