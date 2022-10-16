const strings = ["a", "b", "c", "d"];

// push: insert an element at the last index
strings.push("e"); // O(1)

// pop: delete the last item in array
strings.pop(); // O(1)

// unshift: insert element at first index of array
strings.unshift("x"); // O(n)

// splice: insert element on desired position, also deletes and return deleted elements
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
