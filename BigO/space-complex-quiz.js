// Determine the space complexity for the following functions
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
// logUpTo(10);
// Space: O(1)

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// logAtMost10(2);
// Space: O(1)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
// console.log(onlyElementsAtEvenIndex([2, 5, 9, 6, 10, 100, 50, 33]));
// Space: O(n)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
console.log(subtotals([1, 9, 20, 15, 11, 13, 22]));
// Space: O(n)
