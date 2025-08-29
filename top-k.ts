function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
}
