// find index
// find index return index number
const data = [
  { id: 1, tittle: "first" },
  { id: 2, tittle: "second" },
  { id: 3, tittle: "third" },
];

const result = data.findIndex((elements) => elements.tittle === "second");
console.log(result);

// find
// find method returns elements when satisfied condition
const data2 = [
  { id: 1, tittle: "first" },
  { id: 2, tittle: "second" },
  { id: 3, tittle: "third" },
];

const results = data2.find((elements) => elements.tittle === "third");
console.log(results);
