// IIFE - Imediately Invoked function Expression
(function(a, b, c){
  console.log(`Result ${a + b + c}`)
})(1, 2, 3);


(() => {
  console.log(`Arrow 01`)
})();


(() => console.log(`Arrow 02`))();