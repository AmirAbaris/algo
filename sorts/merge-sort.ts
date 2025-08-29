function mSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mSort(arr.slice(0, mid));
  const right = mSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const res: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push[right[j++]];
    }
  }

  return res.concat(left.slice(i)).concat(right.slice(j));
}

mSort([2, 9, 5, 1]);
