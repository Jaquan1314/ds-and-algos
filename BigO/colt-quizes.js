// Determine the time complexity for the following functions
function logUpTo(n) {
  for (var i = 0; i <= n; i++) {
    console.log(i);
  }
}
// logUpTo(10);
// Time: O(n)

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// logAtMost10(20);
// Time: O(1)

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
// logAtLeast10(50);
// Time: O(n)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
// console.log(
//   onlyElementsAtEvenIndex([2, 4, 9, 10, 20, 6, 1, 100, 150, 210, 300])
// );
// Time: O(n)

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
// console.log(subtotals([10, 20, 11, 2, 4, 8, 9]));
// Time: O(n^2)
