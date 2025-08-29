function bubbleSort(n: number[]) {
  for (let i = 0; i < n.length - 1; ++i) {
    for (let j = 0; j < n.length - i - 1; ++j) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
  }
}
