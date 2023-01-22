// **********************************
// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// **********************************

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i*3000);
}
