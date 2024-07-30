// Create an object representing a car
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

// Print each property
console.log('Make:', car.make);
console.log('Model:', car.model);
console.log('Year:', car.year);


// 2. Function that takes an object and returns an array of its keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 3. Function that takes an object and returns an array of its values
function getObjectValues(obj) {
    return Object.values(obj);
}
const carKeys = getObjectKeys(car);
const carValues = getObjectValues(car);

console.log('Keys:', carKeys);
console.log('Values:', carValues);