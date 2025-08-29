# LeetCode Solutions

A collection of LeetCode problem solutions implemented in TypeScript and JavaScript.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd algo

# Install dependencies
npm install
```

### Running Solutions

```bash
# Run TypeScript files
npx ts-node filename.ts

# Run JavaScript files
node filename.js
```

## 📚 Problem Categories

### 🔍 Search Algorithms

- **Binary Search** (`searches/b-search.ts`)
  - Standard binary search implementation
  - Variations for different use cases

### 🔄 Sorting Algorithms

- **Bubble Sort** (`sorts/b-sort.ts`)
- **Selection Sort** (`sorts/sec-sort.ts`)
- **Merge Sort** (`sorts/merge-sort.ts`)

### 🎯 Array Problems

- **Two Sum** (`two-sum.ts`)

  - Find two numbers that add up to target
  - Time: O(n), Space: O(n)

- **Contains Duplicate** (`contains-dub.ts`)
  - Check if array contains duplicates
  - Time: O(n), Space: O(n)

### 📝 String Problems

- **Valid Anagram** (`valid-a.ts`)

  - Check if two strings are anagrams
  - Time: O(n), Space: O(1)

- **Group Anagrams** (`group-anagram.ts`)
  - Group strings by anagram
  - Time: O(n _ k log k), Space: O(n _ k)

## 🧪 Testing

Each solution includes test cases to verify correctness:

```typescript
// Example test structure
const testCases = [
  { input: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { input: [3, 2, 4], target: 6, expected: [1, 2] },
];

testCases.forEach(({ input, target, expected }, index) => {
  const result = twoSum(input, target);
  console.log(`Test ${index + 1}:`, result);
  console.log("Expected:", expected);
  console.log(
    "Pass:",
    JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
  );
  console.log("---");
});
```

## 📊 Performance Notes

- **Time Complexity**: Noted for each solution
- **Space Complexity**: Included where relevant
- **Optimizations**: Alternative approaches documented

## 🎯 Problem Status

| Problem            | Status | Difficulty | Category |
| ------------------ | ------ | ---------- | -------- |
| Two Sum            | ✅     | Easy       | Array    |
| Contains Duplicate | ✅     | Easy       | Array    |
| Valid Anagram      | ✅     | Easy       | String   |
| Group Anagrams     | ✅     | Medium     | String   |
| Binary Search      | ✅     | Easy       | Search   |
| Bubble Sort        | ✅     | Easy       | Sort     |
| Selection Sort     | ✅     | Easy       | Sort     |
| Merge Sort         | ✅     | Medium     | Sort     |

## 🔧 Development

### Adding New Solutions

1. Create a new file with descriptive name
2. Include problem description in comments
3. Add test cases
4. Document time/space complexity
5. Update this README

### Code Style

- Use TypeScript for type safety
- Include JSDoc comments for functions
- Follow consistent naming conventions
- Add comprehensive test cases

## 📈 Learning Progress

This repository tracks my progress through LeetCode problems, focusing on:

- **Algorithm understanding**
- **Time/Space complexity analysis**
- **Multiple solution approaches**
- **Code optimization techniques**

## 🤝 Contributing

Feel free to:

- Add new problem solutions
- Improve existing solutions
- Add more test cases
- Suggest optimizations

## 📝 License

This project is for educational purposes. Feel free to use and modify as needed.

---

**Happy Coding! 🚀**
