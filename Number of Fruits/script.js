function getFruitNumber() {
  let fruitNumberInput = document.querySelector('.fruits.input').value;
  if (fruitNumberInput > 0)  {
    let fruitNumberOutput = document.querySelector('.fruits.output').innerHTML = `there are ${fruitNumberInput} fruits in the Basket`;
  } else if (fruitNumberInput <= 0) {
    let fruitNumberOutput = document.querySelector('.fruits.output').innerHTML = `there are no fruits in the Basket`;
  } 
}

console.log(getFruitNumber())

//function getFruitNumber(value) {
  //let fruitNumberInput = document.querySelector('.input').value;
  //let fruitNumberOutput = document.querySelector('.output').innerHTML = `there are ${fruitNumberInput} fruits in the Basket`;
//} 