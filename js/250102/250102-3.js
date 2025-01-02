console.log("codeit" && undefined && null);
console.log("codeit" || false || null);
console.log(("codeit" && 123) || null);
console.log("codeit" || (123 && true));

// undefined
// codeit
// 123
// codeit
{
  const sum = 0;

  function getSum(x, y) {
    const sum = x + y;

    return sum;
  }

  if (getSum(1, 5) > 3) {
    const sum = 4 + 6;
  }

  console.log(sum);
}
// 0

{
  // falsy
  Boolean(false);
  Boolean(null);
  Boolean(undefined);
  Boolean(0);
  Boolean(NaN);
  Boolean("");

  // truthy
  Boolean(true);
  Boolean("codeit");
  Boolean(123);
  Boolean(-123);
  Boolean({});
  Boolean([]);
}
