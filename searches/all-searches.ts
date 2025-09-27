// linear search
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // returns index if
      return i;
    }
  }

  // not found
  return -1;
}

function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = (low + high) / 2;
    if (arr[mid] === target) {
      return target;
    }

    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  // not found
  return -1;
}

function fibo(num: number): number {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(5));
