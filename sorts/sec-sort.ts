function secSort(n: number[]) {
  for (let i = 0; i < n.length; ++i) {
    for (let j = i + 1; j < n.length; ++j) {
      if (n[i] > n[j]) {
        let temp = n[i];
        n[i] = n[j];
        n[j] = temp;
      }
    }
  }
}

const r = [5, 4, 3, 2, 1];
secSort(r);

console.log(r);
