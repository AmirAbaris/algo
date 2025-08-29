function bSearch(arr: string[], target: string): string {
  // first thing to do is declare the low and hights
  let low = 0;
  let high = arr.length - 1;

  // why while low <= high? -- like what it does here?
  // cuz it sets the range for search in index -- from low to high
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midElement = arr[mid];

    if (midElement === target) return target;
    else if (midElement < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "";
}
