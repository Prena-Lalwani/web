let car={
  brand : "Vitz",
  model : "Car",
  year : 2024
};

function carInfo(car){
  return "The " +car.brand+" " +car.model+" was manufactured in" +car.year+"."
}

console.log(carInfo(car));