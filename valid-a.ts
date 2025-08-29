function isAnagram(s: string): void {
  let map: Record<string, number> = {};

  for (let char of s) {
    console.log(char)
    map[char] = (map[char] ?? 0) + 1;
  }

  console.log(map);
}

isAnagram("himei");
