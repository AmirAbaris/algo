function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (const word of strs) {
    const sorted = word.split("").sort().join("");

    map.set(sorted, [word]);

    if (!map.has(sorted)) {
      map.set(sorted, [word]);
    } else {
      map.get(sorted)!.push(word);
    }
  }

  return Array.from(map.values());
}

groupAnagrams(["cat", "tac", "bat"]);
