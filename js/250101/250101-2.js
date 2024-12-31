{
  let x = ["Kim", "Na", "Park", "Lee"]; // 같은 주소값 가르킴
  let y = x; // 같은 주소값 가르킴

  y.push("Lim");
  x[4] = "Sung";

  console.log(y); // ['Kim', 'Na', 'Park', 'Lee', 'Sung']
}

{
  let x = {
    numbers: [1, 2, 3, 4],
    title: "Labala",
  };
  let y = x.numbers;
  let z = x.title;

  x.numbers.unshift(5);
  x.title = "Hello";

  console.log(y);
  console.log(z);

  // [ 5, 1, 2, 3, 4 ]
  // Labala
}
