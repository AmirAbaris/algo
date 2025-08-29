// input: "hello"
// output: Map { h => 1, e => 1, l => 2, o => 1 }
function countChars(txt: string): Map<string, number> {
  const map = new Map<string, number>();

  for (const char of txt) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  return map;
}

// input: [1, 2, 2, 3, 1]
// output: Map { 1 => 2, 2 => 2, 3 => 1 }
function countNums(arr: number[]): Map<number, number> {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; ++i) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }

  return map;
}

// input: "swiss"
// output: "w" (since it's the first char that occurs once)
function uniqueChar(str: string): string {
  const map = new Map<string, number>();

  for (let char of str) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  return "";
}

// input: ["hi", "cat", "dog", "yo"]
// output: [["hi", "yo"], ["cat", "dog"]]
function groupByLenth(arr: string[]): string[][] {
  const map = new Map<number, string[]>();

  for (const word of arr) {
    let length = word.length;

    if (!map.has(length)) {
      map.set(length, [word]);
    } else {
      map.get(length)?.push(word);
    }
  }

  return Array.from(map.values());
}

// input: "listen", "silent"
// output: true
// input: "rat", "car"
// output: false
// function isAnagram(str1: string, str2): boolean { // wow
//   const map = new Map<string, number>();

//   for (let char of str1) {
//     map.set(char, (map.get(char) ?? 0) + 1);
//   }

//   for (let char of str2) {
//     if (!map.has(char)) {
//       return false;
//     }
//   }
// }
