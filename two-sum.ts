function twoSum(nums: number[], target: number): number[] {
  let map: Record<number, number> = {};
  let complement: number | undefined;

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }

  return [];
}
